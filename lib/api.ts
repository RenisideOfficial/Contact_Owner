// api request file
import { ContactFormData } from "./utils";

export const sendContactForm = async (data: ContactFormData): Promise<{success: boolean}> => {
    const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
             Accept: 'application/json',
        },
        body: JSON.stringify(data)
    })

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(errorData?.message || `Request failed: ${response.status}`)
    }

    return response.json();
}