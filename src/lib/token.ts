
import { getTokenByEmail } from '@/data/verification-token';
import { v4 as uuid } from 'uuid';
import { db } from './db';
export const generateVerificationToken = async (email: string) => {
    const token = await uuid()
    const expires = new Date(new Date().getTime() + 3600 * 1000)
    const existingToken = await getTokenByEmail(email)
    if (existingToken) {
        await db.verificationToken.delete({
            where: {
                id: existingToken.id
            }
        })
    }

    const verificationTonken = await db.verificationToken.create({
        data: {
            token,
            email,
            expires
        }
    })

    return verificationTonken

}

export const generateResetToken = async (email :  string) => {
    const token = await uuid()
    const expires = new Date( new Date().getTime() + 15*60*1000)
    const existingToken = await db.resetPasswordToken.findUnique({
        where : {
            token
        }
    })

    if (existingToken){
        await db.resetPasswordToken.delete({
            where : {
                token
            }
        })
    }

    const resetPassWordToken = await db.resetPasswordToken.create({
        data : { 
            token , 
            email , 
            expires
        }
    })

    return resetPassWordToken
    
}