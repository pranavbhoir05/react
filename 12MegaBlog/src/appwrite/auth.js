import conf from '../conf.js'
import { Client, Account, ID } from 'appwrite'

export class AuthService {
    client = new Client()  // Create a new instance of the Appwrite
    account                //declare the Account service variable

     //constructor runs automatically when class object is created
    constructor(){         
        // configure the Appwrite client with endpoint and project id
        this.client
        .setEndpoint(conf.appwrite)
        .setProject(conf.appwriteProjectId)

        // initialize the Account service with the configured client
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, 
            password, name)
            if(userAccount) {
                //call the login method to create a session for the newly created account
            return await this.login({email, password})
            }
        } catch (error) {
            throw error
        }
    }

    async login({email, password}) {
        try {
            const loginSession = await this.account.createEmailPasswordSession(email,
                 password)
            return loginSession
        } catch (error) {
            throw error
        }
    }

    //if current user is logged in or not
    async getCurrentUser() {
        try {
            const user = await this.account.get()
            if (user) {
                return user
            } else {
                return null
            }
        } catch (error) {
            throw error
        }
    }
    
    async logout() {
        try {
            await this.account.deleteSessions()
        } catch (error) {
            throw error
        }
    }
}
//// create a single instance of AuthService
const authService = new AuthService()

export default authService