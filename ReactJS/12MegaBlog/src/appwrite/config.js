import conf from '../conf.js';
import {Client, ID, Databases, Storage, Query} from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
        .setEndpoint(conf.appwriterUrl)
        .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
        
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await thsis.databases.createDocument(
                conf.appwritDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }
            )             
        } catch (error) {
            throw error
        }
    }


    async updatePost( slug,{title, content, featuredImage, status}){
        try {
            return await this.databases.updateDocument(
                conf.appwritDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,

                }
            );            
        } catch (error) {
            throw error
        }

    }

    async deletePost (slug){
        try {
            await this.databases.deleteDocument(
                conf.appwritDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )        
            return true;    
        } catch (error) {
            throw error
            return false;
        }

    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwritDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            throw error
            return false;
        }
    }

    async getPosts (queries = [Query.equal("status", "active")]){
        try {
            await this.databases.listDocuments(
                conf.appwritDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            throw error
        }
    }

    async uploadFile(file){
        try {
             return await this.bucket.createFile(
                conf.appwriteBuketId,
                ID.unique(),
                file
             )       
        } catch (error) {
            throw error
        }
    }

    async deleteFIle(fileID){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBuketId,
                fileID
            )            
        } catch (error) {
            throw error
        }
    }

    getFilePreview(fileID){
        return this.bucket.getFilePreview(
            conf.appwriteBuketId,
            fileID
        )
    }

    
}


const service = new Service()
export default service