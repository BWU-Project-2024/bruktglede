import Link from 'next/link';
import Image from "next/image";
import { StoreTag } from './StoreTag';
import { CategoryTag } from './CategoryTag';

export const SearchResults = ({ searchResultsStore, searchResultsPost, searchQuery }) => {
    const storeCount = searchResultsStore ? searchResultsStore.length : 0;
    const postCount = searchResultsPost ? searchResultsPost.length : 0;
    const totalCount = storeCount + postCount;

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('nb-NO');
    };

    return (
        <div className="py-10">
            {totalCount > 0 && (
                <p className="pb-16 text-xl">{`${totalCount} treff for "${searchQuery}"`}</p>
            )}

            {searchResultsStore?.map((store, index) => (
                <div key={index} className="flex flex-col">
                    <div className="flex justify-between h-full">
                        <div className='flex flex-col gap-1 mr-4'>
                            <Link href={`/artikler/${store.id}`} key={index}>
                                <span className="text-lg font-medium underline">{store.name}</span>
                            </Link>
                            <p className="text-sm md:text-md text-textLight flex-grow font-medium uppercase">Butikk</p>
                            <p className="text-xs mb-1">{formatDate(store.created_at)}</p>
                            <p className="text-base line-clamp-2">{store.description}</p>
                            <div className="mt-4 md:mt-6">
                                <StoreTag storename={store.name} className="mr-1" />

                                {store.tags.map((tag, index) => (
                                    <CategoryTag key={index} title={tag} />
                                ))}

                            </div>
                        </div>
                        <Image
                            src={store.img}
                            width={250}
                            height={90}
                            alt="Post bilde"
                            className="hidden md:block"
                        >
                        </Image>

                    </div>
                    <hr className="w-full h-px my-5 bg-gray-200 border-0 "></hr>
                </div>
            ))}

            {searchResultsPost?.map((post, index) => (
                <div key={index} className="flex flex-col">
                    <div className="flex justify-between">
                        <div className="flex flex-col gap-1">
                            <Link href={`/artikler/${post.id}`} key={index}>
                                <span className="text-lg font-medium underline">{post.title}</span>
                            </Link>
                            <p className="text-sm md:text-md flex-grow text-textLight font-medium uppercase">{post.post_type}</p>
                            <p className="text-xs mb-1">{formatDate(post.created_at)}</p>
                            <p className="text-base line-clamp-2">{post.ingress}</p>
                            <div className="mt-4 mb-2">
                                <StoreTag storename={post.store_name} className="mr-1" />
                                {post.tags.map((tag, index) => (
                                    <CategoryTag key={index} title={tag} />
                                ))}

                            </div>
                        </div>
                        <Image
                            src={post.img}
                            width={250}
                            height={100}
                            alt="Post bilde"
                            className="hidden md:block"
                        >
                        </Image>

                    </div>
                    <hr className="w-full h-px my-5 bg-gray-200 border-0 "></hr>
                </div>
            ))}

            {totalCount === 0 && (
                <div>
                    <p className="pb-6 text-lg">{`0 treff for "${searchQuery}"`}</p>
                    <div className="flex flex-col justify-center items-center mt-20">
                        <h2 className="text-xl mb-4">Ingen treff</h2>
                        <p>Dessverre finner vi ikke hva du søker etter.</p>
                        <p>Prøv å søk på noen av våre <span className="italic">tagger</span>.</p>
                    </div>
                </div>
            )}

        </div>
    )
}