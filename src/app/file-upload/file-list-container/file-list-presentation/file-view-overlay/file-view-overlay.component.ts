import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { DomSanitizer, SafeResourceUrl } from "@angular/platform-browser";
import { FileData } from "src/app/file-upload/models/FileData";

// ------------------------------------------------------------------------------------------ //
import { Button } from "src/app/shared/models/button.model";

@Component({
  selector: 'app-file-view-overlay',
  templateUrl: './file-view-overlay.component.html',
  styleUrls: ['./file-view-overlay.component.scss']
})
export class FileViewOverlayComponent implements OnInit {
	@Input() buttons!: Button[];
	@Output() buttonClick: EventEmitter<string>;

	private _file!: FileData;
	@Input() public set file(v: FileData | null) {
		if (v) {
			console.log(v);
			this._file = v;
		}
	}

	public get file(): FileData {
		return this._file;
	}

	public safeUrl!: SafeResourceUrl;

	constructor(private sanitizer: DomSanitizer) {
		this.buttonClick = new EventEmitter();
	}

	ngOnInit(): void {
		const byteCharacters = atob(this._file.content.split(",")[1]);
		const byteNumbers = new Array(byteCharacters.length);
		for (let i = 0; i < byteCharacters.length; i++) {
			byteNumbers[i] = byteCharacters.charCodeAt(i);
		}
		const byteArray = new Uint8Array(byteNumbers);
		this.safeUrl =
			this.sanitizer.bypassSecurityTrustResourceUrl(
				URL.createObjectURL(new Blob([byteArray], { type: this._file.type })),
			);
	}

	onLoad(iframe: EventTarget | null) {
		(<HTMLIFrameElement>iframe).contentWindow!.document.head.innerHTML +=
			`<style>img{width: 100%;height: auto;}</style>`;
	}

	onButtonClick(name: string) {
		this.buttonClick.emit(name);
	}
}
