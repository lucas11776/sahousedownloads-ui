export interface Blog {
    user_id:number;
    date:string;
    title:string;
    tag:number;
    content:string;
    description:string;
    views:string;
}

export interface UploadBlog {
    
    description:string;
}

export interface UploadBlogResponse {
    response:boolean;
    data: {
        picture:string;
        title:string;
        tag:string;
        content:string;
    }
}
