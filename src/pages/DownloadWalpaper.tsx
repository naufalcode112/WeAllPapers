import React from 'react'

interface DownloadProps {
  image: string;
  title: string;
}

const DownloadWalpaper: React.FC<DownloadProps> = ({image, title}) => {
  const HandleDownload = () => {
    const link = document.createElement('a');

    link.href = image;
    link.download = title;
    link.click();
  }
  return (
    <div>
      <button className="rounded-md text-white bg-blue-500"
      onClick={HandleDownload}><i className="fa fa-download"></i></button>
    </div>
  )
}
export default DownloadWalpaper
