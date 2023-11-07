import Link from "next/link"

export default function Logo(){
    return(
        <Link href={'/'}>
                <h1 id="store-name"
                    className="text-4xl flex-none"
                >
                    MOE
                </h1>
                </Link>
    )
}