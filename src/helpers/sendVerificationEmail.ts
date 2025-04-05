import { resend } from "@/lib/resend";
import VerificationEmail from "../../emails/VerificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function secdVerificationEmail (
    email: string,
    username: string,
    verifyCode: string,
): Promise<ApiResponse>{
    try {

        return {success: true, message: "Failed to send verification email"}
        
    } catch (emailError) {
        console.error("Error sending verification email", emailError);
        return {success: false, message: 'Failed to send verification email'}
    }
}