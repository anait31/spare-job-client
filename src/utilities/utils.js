// Upload Image and Return Image URL
import axios from "axios"

export const imageUpload = async imageData => {
    const formData1 = new FormData()
    formData1.append('image', imageData)
    const { data } = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_API}`, formData1)
    const photo = data.data.display_url
    return photo
}