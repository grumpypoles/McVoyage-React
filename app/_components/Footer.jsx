import GalleryFooter from "@/app/_components/GalleryFooter";
import Copyright from "@/app/_components/Copyright";

GalleryFooter;

function Footer() {
  return (
    <div className="bg-gray-800">
      <div className="grid mt-3 md:grid-cols-2 ">
        <GalleryFooter
          src={"fiona.webp"}
          fName={"Fiona Mckinney"}
          bio={
            "My outdoor adventures started aged 14 in Hunua and Tongariro. Our walking trips are a great way to combine my interests in the outdoors, birds, photography and travel."
          }
        />
        <GalleryFooter
          src={"karol.webp"}
          fName={"Karol Wojasz"}
          bio={
            "My first independent walk happened in 1961. I walked on my own from Sopot to Gdynia. Quite a memorable adventure for a five-year-old boy. And I am still enjoying all forms of walks."
          }
        />
      </div>
      <div className="flex justify-center pb-4 text-xs md:text-sm">

      <Copyright />
      </div>
    </div>
  );
}

export default Footer;
