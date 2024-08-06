import { FC } from 'hono/jsx'

interface Post {
  title: string
  content: string
  image?: string
}



interface OGImageOptions {
  width: number
  height: number
  gradientStart: string
  gradientEnd: string
  titleColor: string
  contentColor: string
  titleFontSize: string
  contentFontSize: string
  logoPath: string
}

interface OGImageProps {
  post: Post
  options?: Partial<OGImageOptions>
}

const defaultOptions: OGImageOptions = {
  width: 1200,
  height: 630,
  gradientStart: '#1c1917',
  gradientEnd: '#172554',
  titleColor: '#ffffff',
  contentColor: '#e5e7eb',
  titleFontSize: '40px',
  contentFontSize: '24px',
  logoPath: 'https://avatars.githubusercontent.com/u/97833696?v=4',
}

const OGImageComponent: FC<OGImageProps> = ({ post, options = {} }) => {
  const opts: OGImageOptions = { ...defaultOptions, ...options }

  return (
    <div
      style={{
        width: `${opts.width}px`,
        height: `${opts.height}px`,
        background: `linear-gradient(to right, ${opts.gradientStart}, ${opts.gradientEnd})`,
        fontFamily: 'Arial, sans-serif',
        color: opts.contentColor,
        padding: '50px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          marginBottom: '30px',
        }}
      >
        <img
          src={opts.logoPath}
          alt="Logo"
          style={{
            display: 'flex',
            width: '80px',
            height: '80px',
            borderRadius: '50%',
            marginRight: '20px',
          }}
        />
        <span style={{ color: '#666666', fontSize: opts.titleFontSize }}>Medial</span>
      </div>
      <h1
        style={{
          display: 'flex',
          color: opts.titleColor,
          fontSize: opts.titleFontSize,
          fontWeight: 'bold',
          marginBottom: '40px',
        }}
      >
        {post.title.length > 50 ? post.title.substring(0, 47) + '...' : post.title}
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
                {post.image && (
          <img
            src={post.image}
            alt="Post image"
            style={{
              width: '500px',
              height: '400px',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
        )}
        <div
          style={{
            display: 'flex',
            fontSize: opts.contentFontSize,
            flex: post.image ? '1' : '2',
            paddingRight: post.image ? '20px' : '0',
          }}
        >
          {post.content.substring(0, 400)} ...
        </div> 

      </div>
    </div>
  )
}

export default OGImageComponent