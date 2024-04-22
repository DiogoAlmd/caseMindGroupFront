import NavBar from "@/components/NavBar"

interface ProductProps{
    params: { id: number },
    // searchParams: { [key: string]: string | string[] | undefined }
}

export default function Product({ params }: { params: { id: number } }) {
    return(
        <div>
            <NavBar/>
            {params.id}
        </div>
    );    
}