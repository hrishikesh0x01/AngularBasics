// To add an entry into navbar simply add it here.

import { Feature } from "./models/feature.model";

export let navItems: Feature[][] = [
    [ //section 1
        {
            "icon": "icon-database",
            "dispName": "Data Binding",
            "routePath": "/data-binding"
        },
        {
            "icon": "icon-git-pull-request",
            "dispName": "Directives & Pipes",
            "routePath": "/directive-and-pipes"
        },
        {
            "icon": "icon-sync",
            "dispName": "REST API",
            "routePath": "/rest-api"
        },
        {
            "icon": "icon-tools",
            "dispName": "CRUD Without Server",
            "routePath": "/crud-without-server"
        },
    ],
    [ // section 2
        {
            "icon": "icon-react",
            "dispName": "Reactive Form Basics",
            "routePath": "/reactive-form-basics"
        },
        {
            "icon": "icon-tools",
            "dispName": "CRUD Operation",
            "routePath": "/crud-operation"
        },
        {
            "icon": "icon-file-text2",
            "dispName": "Resume Builder",
            "routePath": "/resume-builder"
        }
    ]
];