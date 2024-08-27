import { type PropsWithChildren } from "react";
import { cn } from "~/lib/utils";
import Image from "next/image";
import MatteoThumbnail from "~/images/salient/screenshots/1b.jpg";
import Video1Thumbnail from "~/images/content/thumbnails/1.png";
import Video2Thumbnail from "~/images/content/thumbnails/2.png";
import Video3Thumbnail from "~/images/content/thumbnails/3.png";
import Video4Thumbnail from "~/images/content/thumbnails/4.png";
import Video5Thumbnail from "~/images/content/thumbnails/5.png";
import Video6Thumbnail from "~/images/content/thumbnails/6.png";

const videos = [
  {
    thumbnail: Video6Thumbnail,
    url: "https://www.instagram.com/reel/C83_2M_ozwN/",
  },
  {
    thumbnail: Video1Thumbnail,
    url: "https://www.instagram.com/reel/C6d0lkuotcK/",
  },
  {
    thumbnail: MatteoThumbnail,
    url: "https://vimeo.com/946554155",
  },
  {
    thumbnail: Video2Thumbnail,
    url: "https://www.instagram.com/reel/C6n4EcPILzJ/",
  },
  {
    thumbnail: Video3Thumbnail,
    url: "https://www.instagram.com/reel/C4sojrFN-WF/",
  },
  {
    thumbnail: Video4Thumbnail,
    url: "https://www.instagram.com/reel/C6wKYEzIV9Y/",
  },
  {
    thumbnail: Video5Thumbnail,
    url: "https://www.instagram.com/reel/C61C-9-oARL/",
  },
];

const LearnPageContent = ({
  children,
  className,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <>
      <div
        className={cn(
          "-my-10 mx-auto w-full max-w-md font-sans lg:-my-6 dark:bg-black dark:text-white",
          className,
        )}
      >
        {videos.map((video) => (
          <div key={video.url} className="flex min-h-8 w-full flex-col gap-x-4">
            <Image src={video.thumbnail} alt="" className="" unoptimized />
          </div>
        ))}
      </div>
    </>
  );
};

export default LearnPageContent;
