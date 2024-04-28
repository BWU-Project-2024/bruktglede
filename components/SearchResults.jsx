import Link from 'next/link';
import Image from "next/image";
import { StoreTag } from './StoreTag';

export const SearchResults = ({ searchResultsStore, searchResultsPost, searchQuery }) => {
    const storeCount = searchResultsStore ? searchResultsStore.length : 0;
    const postCount = searchResultsPost ? searchResultsPost.length : 0;
    const totalCount = storeCount + postCount;

    const formatDate = (timestamp) => {
        const date = new Date(timestamp);
        return date.toLocaleDateString('nb-NO');
    };

    return (
        <div>
            {totalCount > 0 && (
                <p>{`${totalCount} treff for "${searchQuery}"`}</p>
            )}

            {searchResultsStore?.map((store, index) => (
                <div key={index} className="flex flex-col">
                    <div className="flex justify-between">
                        <div className='flex flex-col gap-1'>
                            <Link href={`/artikler/${store.id}`} key={index}>
                                <span className="text-lg font-medium underline">{store.name}</span>
                            </Link>
                            <p className="text-xs mb-1">{formatDate(store.created_at)}</p>
                            <p className="text-base line-clamp-2">{store.description}</p>
                            <div className="mt-2 mb-5">
                                {/* <StoreTag storename={post.store_name} className="mr-1" />
                    {post.tags.map((tag, index) => (
                        <CategoryTag key={index} title={tag} />
                    ))} */}

                            </div>
                        </div>
                        <Image
                            src={store.img}
                            width={200}
                            height={100}
                            alt="Post bilde"
                        >
                        </Image>

                    </div>
                    <hr className="w-full h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </div>
            ))}


            {searchResultsPost?.map((post, index) => (
                <div key={index} className="flex flex-col">
                    <div className="flex justify-between">
                        <div className='flex flex-col gap-1'>
                            <Link href={`/artikler/${post.id}`} key={index}>
                                <span className="text-lg font-medium underline">{post.title}</span>
                            </Link>
                            <p className="text-xs mb-1">{formatDate(post.created_at)}</p>
                            <p className="text-base line-clamp-2">{post.ingress}</p>
                            <div className="mt-2 mb-5">
                                {/* <StoreTag storename={post.store_name} className="mr-1" />
                        {post.tags.map((tag, index) => (
                            <CategoryTag key={index} title={tag} />
                        ))} */}

                            </div>
                        </div>
                        <Image
                            src={post.img}
                            width={200}
                            height={100}
                            alt="Post bilde"
                        >
                        </Image>

                    </div>
                    <hr className="w-full h-px my-5 bg-gray-200 border-0 dark:bg-gray-700"></hr>
                </div>
            ))}


            {totalCount === 0 && (
                <div>
                    <p>{`0 treff for "${searchQuery}"`}</p>
                    <h2>No results</h2>
                </div>
            )}

        </div>
    )
}