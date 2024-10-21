import { IconDefinition } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@radix-ui/themes'
import Image from 'next/image'
import { useRef, useState } from 'react'

export default function ImageUpload({name, icon}:{name:string;icon:IconDefinition}) {
    const fileInRef = useRef<HTMLInputElement>(null)
    const [file, setFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)
    const [url, setUrl] = useState('')

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0]
            setFile(file)
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreviewUrl(reader.result as string)
            }
            reader.readAsDataURL(file)
        }
    }

    const uploadFile = async( evt: React.MouseEvent<HTMLButtonElement, MouseEvent> ) => {
        evt.preventDefault();
    
        const formData = new FormData();
        if (fileInRef.current && fileInRef.current.files && fileInRef.current.files.length > 0) {
            formData.append("file", fileInRef.current.files[0]);
        }
    
        const response = await fetch("/api/upload", {
          method: "POST",
          body: formData,
        });
        const result = await response.json();
        console.log(result);
        const data = new FormData();
        data.set('file', `/${file?.name}`);
        setUrl(`/${file?.name}`);
      }


  return (
    <>
        <div className="bg-gray-100 size-24 inline-flex items-center justify-center rounded-md">
        
        {previewUrl && (
            <Image src={previewUrl} alt="Preview" width={1024} height={1024} className="max-h-24 w-auto h-auto" />
        )}
        {!previewUrl && (
            <FontAwesomeIcon icon={icon} className="text-gray-400" />
        )}
        </div>
        <input type='hidden' value={url} name={name} />
        <div className="mt-2">
            <input 
            onChange={ev => handleFileChange(ev)}
            ref={fileInRef} 
            type="file" 
            className='hidden'/>
            <Button 
            type='button'
            onClick={() => fileInRef.current?.click()}
            variant="soft">
                Upload
            </Button>
            {file && (
                <Button
                type='button'
                onClick={uploadFile}
                variant='soft'
                >+</Button>
            )}
        </div>
    </>
  )
}
