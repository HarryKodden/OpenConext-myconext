import I18n from "i18n-js";

I18n.translations.nl = {
    header: {
        title: "eduID",
        logout: "Uitloggen"
    },
    landing: {
        logoutTitle: "Je bent uitgelogd",
        logoutStatus: "Om het uitlogproces te voltooien, moet je de browser nu afsluiten.",
        deleteTitle: "Je eduID is verwijderd",
        deleteStatus: "Om het verwijderingsproces te voltooien, moet je je browser nu afsluiten."
    },
    notFound: {
        title: "Oeps...",
        title2: "Er is iets fout gegaan (404)."
    },
    profile: {
        title: "Persoonlijke informatie",
        info: "Basisinformatie zoals je naam en e-mailadres.",
        email: "E-mail",
        schacHomeOrganization: "Instellings ID",
        name: "Naam",
        profile: "Profiel"
    },
    edit: {
        title: "Aanpassen profielgegevens",
        info: "Voer je volledige naam in.",
        givenName: "Je voornaam",
        familyName: "Je achternaam",
        update: "Opslaan",
        cancel: "Annuleren",
        updated: "Je profiel is bijgewerkt.",
        back: "/profile"
    },
    security: {
        title: "Beveiligingsinstellingen",
        subTitle: "We bieden verschillende methoden om in te loggen met je eduID.",
        secondSubTitle: "Loginmethoden",
        usePassword: "Wachtwoord",
        notSet: "Niet ingesteld",
        useMagicLink: "Stuur magische link naar",
        rememberMe: "Ingelogd blijven",
        rememberMetrue: "Ja",
        rememberMefalse: "Nee",
    },
    home: {
        welcome: "Welkom {{name}}",
        profile: "Profiel",
        security: "Beveiliging",
        account: "Account",
        favorites: "Favorieten",
        settings: "Instellingen",
        links: {
            teams: "Teams",
            teamsHref: "https://teams.{{baseDomain}}",
        }
    },
    account: {
        title: "Je eduID account",
        deleteTitle: "Je eduID verwijderen",
        info1: "Je kunt je eduID verwijderen wanneer je maar wilt.",
        info2: "Let op, je verliest het unieke eduID-nummer dat momenteel aan je e-mailadres is gekoppeld. Wanneer je je opnieuw registreert voor eduID met hetzelfde e-mailadres, krijg je een nieuw eduID-nummer. Sommige diensten gebruiken dit unieke nummer om je te identificeren, dus voor die diensten word je dan gezien als een nieuwe gebruiker. ",
        info3: "Houd er rekening mee dat het verwijderen van je eduID niet betekent dat alle diensten die je met je eduID hebt gebruikt, ook je gegevens zullen verwijderen.",
        info4: "Om het verwijderen van je eduID volledig te voltooien, moet je nadat je account is verwijderd je browser afsluiten.",
        deleteAccount: "Verwijder mijn eduID",
        deleteAccountConfirmation: "Weet je zeker dat je je eduID wilt verwijderen?"
    },
    password: {
        setTitle: "Wachtwoord instellen",
        updateTitle: "Wijzig wachtwoord",
        currentPassword: "Huidig wachtwoord",
        newPassword: "Nieuw wachtwoord",
        confirmPassword: "Bevestig nieuw wachtwoord",
        setUpdate: "Wachtwoord instellen",
        updateUpdate: "Opslaan",
        cancel: "Annuleren",
        set: "Je wachtwoord is ingesteld",
        updated: "Je wachtwoord is aangepast",
        back: "/security",
        passwordDisclaimer: "Kies een wachtwoord van tenminste 8 karakters lang met minimaal een hoofdletter en een cijfer. Een langer wachtwoord van minimaal 15 karakters mag ook.",
        invalidCurrentPassword: "Je huidige wachtwoord is niet correct."
    },
    rememberMe: {
        updated: "Dit apparaat wordt niet langer onthouden",
        forgetMeTitle: "Onthoud dit apparaat",
        info: "Dit apparaat wordt onthouden. Je bent hierdoor automatisch ingelogd met eduID.",
        cancel: "Annuleren",
        update: "Vergeet dit apparaat",
        forgetMeConfirmation: "Weet je zeker dat je dit apparaat niet langer wilt onthouden?",
        forgetMe: "Vergeet dit apparaat"
    },
    footer: {
        privacy: "Privacybeleid",
        terms: "Voorwaarden",
        help: "Help",
        poweredBy: "Aangeboden door"
    },
    modal: {
        cancel: "Annuleren",
        confirm: "Bevestigen"
    },
    migration: {
        header: "Je eduID is aangemaakt!",
        info: "Je Onegini-account is succesvol gemigreerd.",
        info2: "Vanaf nu moet je eduID gebruiken om in te loggen bij diensten waar je voorheen Onegini gebruikte.",
        info3: "Tip! je eduID heeft standaard geen wachtwoord nodig (we sturen een magische link naar je e-mail om in te loggen), maar als je wilt, kan je toch een wachtwoord instellen op het ",
        securityLink: " tabblad Beveiliging.",
        link: "Naar mijn account gegevens"
    },
    migrationError: {
        header: "Let op: eduID met zelfde e-mailadres bestaat al",
        info: "Je hebt al een eduID met hetzelfde e-mailadres als je Onegini-account. Je hebt daarom nu twee keuzes:",
        sub1: "Doorgaan met migreren van je bestaande Onegini-account naar een nieuw eduID. Dit betekent:",
        sub1Inner1: "Teamlidmaatschappen in SURFconext Teams en autorisaties binnen diensten van je bestaande Onegini-account gaan mee naar je nieuwe eduID.",
        sub1Inner2: "Teamlidmaatschappen en autorisaties voor diensten van je bestaande eduID gaan verloren.",
        sub2: "Migratie afbreken en doorgaan met je bestaande eduID. Dit betekent:",
        sub2Inner1: "Je blijft je bestaande eduID gebruiken.",
        sub2Inner2: "Je bestaande Onegini-account kun je per 1 juli 2020 niet meer gebruiken. Teamlidmaatschappen in SURFconext Teams en autorisaties binnen diensten van dit Onegini-account gaan verloren.",
        abortMigration: "Migratie afbreken ",
        continueMigration: "Doorgaan met migreren",
        abort: "afbreken",
        continue: "doorgaan",
        help: "Hulp nodig? Stuur een e-mail naar <a href=\"mailto:support@surfconext.nl\">support@surfconext.nl</a>."
    },
    format: {
        creationDate: "Je eduID is aangemaakt op {{date}} om {{hours}}:{{minutes}}"
    }
};
