import { Link } from "@inertiajs/react";

export default function Pagination({links}) {
    return (
        <nav className="text-center mt-4">
            {
                links.map((link)=> (
                    <Link 
                    className={
                        "inline-block py-2 px-3 rounded-lg text-gray-200 text-xs " 
                    }
                    dangerouslySetInnerHTML={{ __html: link.label }}>
                        
                    </Link>
                ))
            }
        </nav>
    )
}