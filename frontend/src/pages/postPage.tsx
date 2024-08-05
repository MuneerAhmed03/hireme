
export default function Component() {
    return (
      <article className="w-full max-w-3xl mx-auto p-6 md:p-8 my-20 lg:p-12 bg-background rounded-lg shadow-md">
        <div className="space-y-4">
          <div className="space-y-2">
            <h1 className="text-4xl font-bold tracking-tight text-primary">A Wonderful Day in the Park</h1>
            <p className="text-muted-foreground">Posted on August 15, 2023</p>
          </div>
          <img
            src="/placeholder.svg"
            width={1200}
            height={600}
            alt="Post Image"
            className="rounded-lg overflow-hidden object-cover aspect-[2/1]"
          />
        </div>
        <div className="prose prose-gray dark:prose-invert mt-8">
          <p>
            Today, I had the pleasure of spending a delightful afternoon in the park. The sun was shining, the birds were
            singing, and the air was filled with the sweet scent of blooming flowers.
          </p>
          <p>
            As I strolled through the lush greenery, I couldn't help but feel a sense of peace and tranquility. The gentle
            breeze caressed my face, and the sound of children's laughter echoed in the distance, bringing a smile to my
            lips.
          </p>
          <p>
            I found a cozy spot under a towering oak tree and settled down with a good book. The pages came alive as I
            immersed myself in the story, occasionally glancing up to admire the beauty that surrounded me.
          </p>
          <p>
            Time seemed to slow down, and I lost myself in the moment, savoring the simple pleasures of being in nature.
            It was a day that reminded me to appreciate the small things in life and to find joy in the present.
          </p>
        </div>
      </article>
    )
  }