import { LandingHeader } from "../Headers/LandingHeader";
import { Button } from "../Misc/Button";
import { getTopFourEvents, getTopFourArticles } from "@/lib/supabase/actionsPublic";
import { BliFrivilligCard } from "../Cards/BliFrivilligCard";
import { AlleButikker } from "../Cards/AlleButikker/AlleButikker";
import { ArrangementCard } from "../Cards/ArrangementCard";
import { ArticleCard } from "../Cards/ArticleCard";
import { sendNewsletter } from "@/lib/supabase/actionsPublicForms";
import cron from 'node-cron';

export const HomePage = async () => {
    const [events, articles] = await Promise.all([getTopFourEvents(), getTopFourArticles()]);

    cron.schedule(
        "0 12 * * 1", //every monday at 12:00 the newsletter will be sent  
        () => {
            sendNewsletter();

        },
        {
            scheduled: true,
            timezone: "Europe/Oslo",
        }
    );

    return (
        <>
            <LandingHeader />
            <main className="flex flex-col min-h-screen w-full font-opensans">
                <h2 className="px-6 md:px-28 lg:px-64 pt-8 lg:pt-20 text-xl lg:text-2xl font-medium mb-6">
                    Møt butikkene
                </h2>
                <AlleButikker />

                <h2 className="px-6 md:px-28 lg:px-64 pt-10 lg:pt-20 text-xl lg:text-2xl font-medium mt-6 mb-10">
                    Kommende arrangementer
                </h2>
                <div className="flex justify-center gap-6 mb-8">
                    <div className="w-[100%] md:w-[80%] lg:w-[70%]">
                        <ArrangementCard
                            eventData={events.eventData}
                            eventPostTypeName={events.eventPostTypeName}
                        />

                    </div>
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
                <div className="flex justify-center gap-6 mb-8">
                    <div className="w-[100%] md:w-[80%] lg:w-[70%]">
                        <ArticleCard
                            articleData={articles.articleData}
                            articlePostTypeName={articles.articlePostType}
                        />
                    </div>
                </div>

                <div className="flex justify-center mb-20">
                    <Button title="Se alle artikler" link="/artikler" />
                </div>


                <BliFrivilligCard tittel="Ønsker du å bli frivillig?" tekst="Ønsker du å hjelpe bruktmiljøet? Ved å være frivillig er du med på å gjøre en forandring. Les mer om hva det går ut på og bli frivillig i dag!" link="/blifrivillig" knapptekst="Bli frivillig" />

            </main>
        </>
    );
};
