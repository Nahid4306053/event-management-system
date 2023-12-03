
import React from "react";
import "../../styles/gallery.scss";
import { Masonry } from "@mui/lab";
export default function GallerySection({ elements , customCss }) {

  return (
    <>

    <div className={`container mx-auto ${customCss}`}>
      <Masonry sx={{ width: "auto" }} columns={{ xs: 1, sm: 1, md: 2, lg: 3 }} spacing={3}>
        {elements.map((gellaryItem, ind) => {
          const { id, title, image, description } = gellaryItem;

          return (
            <div
              key={ind}
             className="gellary rounded-lg overflow-hidden relative"
            >
              <img className="w-full" src={image} alt={title} />
              <div className="flex items-end details p-6  h-full w-full absolute top-0 left-0">
                <div>
                  <h1 className="text-white hover:text-sky-500 transition-all text-2xl font-bold">
                    {title}
                  </h1>
                  <p>{description.slice(0, 65) + " [..]"}</p>
                </div>
              </div>
            </div>
          );
        })}
      </Masonry>
    </div>
  </>);
}
