import { CategoryTag } from "./CategoryTag";
import { createClient } from "@/lib/supabase/supabaseServer";
import { StoreTag } from "./StoreTag";

export const StationInfo = async () => {
    // Create Supabase client instance
    const supabase = createClient();

    try {
        // Fetch data from the 'Store' table
        const { data: storeinfo } = await supabase.from("Store").select("*");

        // Check for errors in fetching store data
        if (!storeinfo) {
            throw new Error("Error fetching store data: ");
        }

        // Log fetched store data
        console.log("Store Data:", storeinfo);

        // Fetch stations for each store
        const stationsData = await Promise.all(
            storeinfo.map(async (store) => {
                // Fetch stations for the current store
                const { data: stationData, error: stationError } =
                    await supabase
                        .from("Station")
                        .select("*")
                        .eq("store_id", store.id);

                // Check for errors in fetching station data
                if (stationError) {
                    throw new Error(
                        "Error fetching station data for store " +
                            store.id +
                            ": " +
                            stationError.message
                    );
                }

                // Log fetched station data for the current store
                console.log(
                    "Station Data for store",
                    store.id,
                    ":",
                    stationData
                );

                // Fetch tags for each station
                const tagsData = await Promise.all(
                    stationData.map(async (station) => {
                        // Fetch tag IDs for the current station from Station_Tags table
                        const { data: stationTagData, error: stationTagError } =
                            await supabase
                                .from("Station_Tags")
                                .select("tag_id")
                                .eq("station_id", station.id);

                        // Check for errors in fetching tag IDs
                        if (stationTagError) {
                            throw new Error(
                                "Error fetching tag IDs for station " +
                                    station.id +
                                    ": " +
                                    stationTagError.message
                            );
                        }

                        // Extract tag IDs from stationTagData
                        const tagIds = stationTagData.map(
                            ({ tag_id }) => tag_id
                        );

                        // Fetch tag names for the extracted tag IDs from Tags table
                        const { data: tagNamesData, error: tagNamesError } =
                            await supabase
                                .from("Tags")
                                .select("name")
                                .in("id", tagIds);

                        // Check for errors in fetching tag names
                        if (tagNamesError) {
                            throw new Error(
                                "Error fetching tag names for station " +
                                    station.id +
                                    ": " +
                                    tagNamesError.message
                            );
                        }

                        // Return the fetched tag names
                        return tagNamesData.map(({ name }) => name);
                    })
                );

                // Merge tag data into station objects
                const stationsWithTag = stationData.map((station, index) => ({
                    ...station,
                    tags: tagsData[index] || [], // Using tag names or an empty array if no tags found
                }));

                // Return the stations with tags
                return stationsWithTag;
            })
        );

        // Render component
        return (
            <div>
                {storeinfo.map((store, index) => (
                    <div key={store.id}>
                        <h2 className=" text-xl lg:text-2xl font-semibold font-opensans mb-1 mt-10">{store.name}</h2> <hr class="h-px my-4 bg-gray-200 border-0 dark:bg-gray-700"></hr>

                      

                        {stationsData[index].map((station) => (
                            <div key={station.id}>
                             
                                <h3 className="font-opensans text-base font-semibold text-color-jet mb-3">{station.title}</h3>
                                <p className="text-base underline text-color-jet mb-2 font-opensans lg:text-lg">{station.address}</p>
                                <div>
                             
                             <div className="mt-3 mb-10">
                             <h4 className="uppercase font-opensans text-sm font-medium">Dette tas imot</h4>
                                    {station.tags.map((tagName) => (
                                        <CategoryTag
                                            key={tagName}
                                            title={tagName}
                                        />
                                    ))}
                               </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        );
    } catch (error) {
        console.error(error);
        return null;
    }
};
