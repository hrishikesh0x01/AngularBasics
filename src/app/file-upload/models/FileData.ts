import { Injectable } from "@angular/core";
import { Adapter } from "src/app/shared/models/adapter.interface";

export class FileData {
    name: string;
    size: number;
    type: string;
    content: string;
    id?: number;

    constructor(
        name: string,
        size: number,
        type: string,
        content: string,
        id?: number,
    ) {
        this.name = name;
        this.size = size;
        this.type = type;
        this.content = content;
        this.id = id;
    }
}

@Injectable({
    providedIn: "root",
})
export class FileDataAdapter implements Adapter<FileData> {
    adapt(item: any): FileData {
        return new FileData(
            item.name,
            item.size,
            item.type,
            item.content,
            item.id,
        );
    }
}

export class InvalidFile {
    id: number;
    name: string;
    size: number;
    error: string;

    constructor(
        id: number,
        name: string,
        size: number,
        error: string,
    ) {
        this.id = id;
        this.name = name;
        this.size = size;
        this.error = error;
    }
}
