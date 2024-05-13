# Bruktglede 
### En samlet digital plattform for bruktbutikkene i Gjøvik
[bruktglede.vercel.app](https://bruktglede.vercel.app)

Bruktglede ble utviklet som del av en Bacheloroppgave i Webutvikling av studentene Lisa Mari Myrene, Anosh Chaudhry og Alexandra Vanje. Nettsiden ble skapt med Gjøvik Kommune som oppdragsgiver.

## Sett opp kodemiljøet lokalt
For å sette opp kodemiljøet lokalt, er det noen steg som må gjøres for at det skal kunne kjøres korrekt.

1. Åpne terminalen

1. Skriv inn `yarn install` for å laste ned alle nødvendige dependencies. 
3. Skriv inn `yarn build` for å generere en optimalisert versjon av applikasjonen.
4. Skriv inn `yarn dev` for å starte applikasjonen på localhost:3000. Nå vil du ha muligheten til å kjøre applikasjonen på din lokale server. 
5. Om du ikke ønsker å laste ned prosjektet lokalt, kan du alltids utforske nettsiden på [bruktglede.vercel.app](https://bruktglede.vercel.app).

## Hva er Bruktglede?
Bruktglede er en plattform med ett hovedfokus: å gjøre det lettere å orientere seg i gjenbruksmiljøet på Gjøvik. Ved å samle bruktbutikker, arrangementer og tilbud som finnes i hos bruktbutikker i kommunen gjør vi det lettere å navigere seg frem og holde seg oppdatert på informasjon.

## Formålet med nettsiden
Det er flere bruktbutikker i Gjøvik som tilbyr ulike tjenester, men tilgjengelig informasjon om butikkene mangler. Å få nøyaktig informasjon om åpningstider, adresser, arrangement og andre relevante detaljer kan være utfordrende, spesielt for nye innbyggere og studenter i Gjøvik. Denne mangelen på tilgang til informasjon hindrer potensiell engasjement og støtte til bruktbutikkmiljøet. For å adressere denne utfordringen har vi utviklet en løsning for å forbedre bruktshoppingopplevelsen i Gjøvik kommune ved å øke tilgjengeligheten av informasjon.

## Hvordan ble nettsiden utviklet?
Nettsiden ble utviklet på bakgrunnen av innsikt fra lokale bruktbutikker og studenter i Gjøvik. Løsningen har utformet seg gjennom intervju og spørreundersøkelser, inkludert tilbakemeldinger fra brukertesting av prototyper. 

## Hva inneholder nettsiden?
På nettsiden vil du finne ulike sider med informasjon fra bruktbutikkene i Gjøvik. Desse er:

- Fremside
- Butikker
- Individuell butikkside
- Bli frivillig-side
- Arrangementer
- Indivduell arrangementside
- Innleveringsstasjoner
- Ukens høydepunkter
- Artikler
- Indivduell artikkelside
- Om oss
- Søkeside
- Logg inn-side
- Glemt passord-side
- CMS for butikkene (oppretting, oppdatering og sletting av innhold)
- CMS for admin (oppretting, oppdatering og sletting av brukere)

Andre funksjonaliteter:

- Melde seg på nyhetsbrev der du får mail hver uke om de nyeste høydepunktene fra bruktbutikkene.
- Sende inn søknad om å bli frivillig til bruktbutikkene.
- Sende søknad om å bli endel av plattformen, Bruktglede. 
- Søkefunksjonalitet, der du har muligheten å søke på overordnet kategoritagger. Du vil få resultat på butikker, artikler og arrangement som inneholder desse kategoritaggene.
- Om du har glemt passord, kan du få en midertidlig innloggingslink på epost, slik du har muligheten å oppdatere passord.
- Når admin oppretter ny bruker, vil den nye brukeren få mail med midertidlig innlogginslink på epost, slik den har mulighet til å oppdatere passord.
- Autentisering: Bekreftelse av identiteten til en bruker ved innlogging med epost og passord.
- Autorisasjon: Bestemmelse hvilke funksjonaliteter en autentisert bruker har tillatelse til å få tilgang til ved hjelp av session, token og cookies.

## Teknologier
Denne nettsiden er utviklet med Next.js som et fullstack rammeverk, med Supabase som database, og Tailwind som CSS rammeverk. Nettsiden er hostet på Vercel. 

## Merknad
Alle butikkene på nettsiden er per nå fiktive bruktbutikker. 


