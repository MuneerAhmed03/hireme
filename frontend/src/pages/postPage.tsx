import {Helmet} from 'react-helmet';
import  { useEffect, useState } from 'react';
import { title as defaultTitle, content as defaultContent, imageUrl as defaultImage} from '../lib/text';

export default function Component() {
  const [pageTitle, setPageTitle] = useState(defaultTitle);
  const [pageContent, setPageContent] = useState(defaultContent);
  const [image,setImage] = useState(defaultImage);
  const [ogImageUrl, setOgImageUrl] = useState('');
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const queryTitle = params.get('title');
    const queryContent = params.get('content');
    const queryImage = params.get('image');

    if (queryTitle) {
      setPageTitle(queryTitle);
    }
    if (queryContent) {
      setPageContent(queryContent);
    }
    if (queryImage) {
      setImage(queryImage);
    }

    const ogurl = `https://test-5d2j.onrender.com/api/generate-og-image?title=${encodeURIComponent(pageTitle)}&content=${encodeURIComponent(pageContent)}&imageUrl=${image}`;
    setOgImageUrl(ogurl);
  }, [pageTitle, pageContent, image]);

    return (
      <div>
      <Helmet>
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageContent.substring(0, 200)} />
        <meta property="og:image" content={ogImageUrl} />
      </Helmet>
      <article className="w-full max-w-3xl mx-auto md:p-8 my-20 lg:p-12 bg-background rounded-lg shadow-md">
        <div className="space-y-4">
          <div className="space-y-2 bg-gradient-to-r from-purple-950 to-blue-950 rounded-lg p-6 text-white">
            <h1 id='title' className="text-4xl font-bold tracking-tight text-primary ">{pageTitle}</h1>
            <p id="date" className="text-muted-foreground">Posted on August 07, 2023</p>
          </div>
          <img
            src={image}
            width={1200}
            height={600}
            alt="Post Image"
            className="rounded-lg overflow-hidden object-cover aspect-[2/1]"
            loading="lazy"
          />
        </div>
        <div id='content' className="prose prose-gray dark:prose-invert mt-8">
          {pageContent}
        </div>
      </article>
      </div>
    )
  }