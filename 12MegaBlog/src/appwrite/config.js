import conf from '../conf.js'
import { Client, Databases, Storage, Query, ID } from 'appwrite'

export class Service{
    client = new Client()  // Create a new instance of the Appwrite
    databases           //declare the Databases service variable
    bucket                //declare the Databases and Storage service variable

    constructor(){
        this.client
                .setEndpoint(conf.appwrite)
                .setProject(conf.appwriteProjectId)
                this.databases = new Databases(this.client) // initialize the Databases service with the configured client
                this.bucket = new Storage(this.client) // initialize the Storage service with the configured client
    }
           async createPost({title,slug,content,image,status ,userId}){
            try {
                return await this.databases.createDocument(
                    conf.appwriteDatabaseId, 
                    conf.appwriteCollectionId, 
                    ID.unique()),
                    {
                        title,
                        slug,
                        content,
                        image,
                        status,
                        userId,
                    }
            } catch (error) {
                throw error
            }
           }

           async updatePost(postId, {title,slug,content,image,status }){
            try {
               return await this.databases.updateDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    postId,
                    {
                        title,
                        slug,
                        content,
                        image,
                        status,
                        }
                )
            } catch (error) {
                throw error
            }
        }
        
            async deletePost(postId){
            try {
                await this.databases.deleteDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId,
                    postId
                )
                return true
            } catch (error) {
                console.log("appwrite service :: deletepost :: error",error);
                return false
            }
            }

            //to get single post by id
            async getPost(postId){
                try {
                    return await this.databases.getDocument(
                        conf.appwriteDatabaseId,
                        conf.appwriteCollectionId,
                        postId
                    )
                } catch (error) {
                console.log("appwrite service :: deletepost :: error",error);
                return false
            }
            }   
               
            //to get all posts
            //i want to get all posts with active status only
            async getAllPosts(queries = [Query.equal('status','active')]){    //status is key in the database(appwrite) and active is the value we want to filter by
             try {
                return await this.databases.listDocuments(
                     conf.appwriteDatabaseId,
                     conf.appwriteCollectionId,
                      queries,
                    )
             } catch (error) {
                console.log("appwrite service :: getAllPosts :: error", error);
                return false
             }
            } 
            
            //file upload service
            async uploadFile(file){
                try {
                    returnawait this.bucket.createFile(
                        conf.appwriteBucketId,
                        ID.unique(),
                        file
                    )
                } catch (error) {
                    console.log("appwrite service :: uploadFile :: error", error);
                    return false
                }
            }

            //file delete service
            async deleteFile(fileId){
                try {
                    await this.bucket.deleteFile(
                        conf.appwriteBucketId,
                        fileId
                        return true
                    )
                } catch (error) {
                    console.log("appwrite service :: deleteFile :: error", error);
                    return false
                }
            }

            //file preview service
            async getFilePreview(fileId){
                return this.bucket.getFilePreview(
                    conf.appwriteBucketId,
                    fileId
                )
            }
        }   

const service = new Service()

export default service 