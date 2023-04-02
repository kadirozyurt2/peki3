import Link from 'next/link'
const Logo = () => {
  return (
    <>
        <Link href="/">
            <img className="img-fluid" src="/images/logo.jpeg" width={90} />
        </Link>
    </>
  )
}

export default Logo