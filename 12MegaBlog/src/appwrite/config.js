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
            async getAllPosts(){
             
            }
                
        }   

const service = new Service()

export default service