import { LandingHeader } from "../LandingHeader";
import { Button } from "../Button";
import { getEvents, getArticles } from "@/lib/supabase/actionsPublic";
import { BliFrivilligCard } from "../BliFrivilligCard";
import { AlleButikker } from "../AlleButikker/AlleButikker";
import { ArrangementCard } from "../ArrangementCard";
import { ArticleCard } from "../ArticleCard";
import { NyhetsbrevForm } from "../NyhetsbrevForm";


export const HomePage = async () => {
    const [events, articles] = await Promise.all([getEvents(), getArticles()]);
   

    return (
        <>
        
            <LandingHeader />
            <main className="flex flex-col min-h-screen w-full">
                <h2 className="px-6 md:px-28 lg:px-64 pt-10 lg:pt-20 text-xl lg:text-2xl font-medium mb-6">
                    Møt butikkene
                </h2>
                <AlleButikker />

                <h2 className="px-6 md:px-28 lg:px-64 pt-10 lg:pt-20 text-xl lg:text-2xl font-medium mb-8">
                    Kommende arrangementer
                </h2>
                <div className="flex justify-center gap-6 mb-8">
                    <ArrangementCard
                        eventData={events.eventData}
                        eventPostTypeName={events.eventPostTypeName}
                    />
                </div>
                <div className="flex justify-center">
                    <Button
                        title="Se alle arrrangementer"
                        link="/arrangementer"
                    />
                </div>

                <h2 className="px-6 md:px-28 lg:px-64 pt-10 lg:pt-20 text-xl lg:text-2xl font-medium mb-8">
                    Siste nytt
                </h2>
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                    <ArticleCard
                        articleData={articles.articleData}
                        articlePostTypeName={articles.articlePostType}
                    />
                </div>

                <div className="flex justify-center mb-14">
                    <Button title="Se alle artikler" link="/artikler" />
                </div>

<NyhetsbrevForm />
                <BliFrivilligCard />
                
            </main>
        </>
    );
};
