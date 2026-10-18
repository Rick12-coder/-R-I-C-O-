case 'setname': {
    // Vérifier si l'expéditeur est le propriétaire
    if (!isOwner) {
        return reply("⛔ Cette commande est réservée au propriétaire !");
    }

    // Récupérer le nouveau nom
    const newName = args.join(" ");

    if (!newName) {
        return reply("❌ Utilisation : .setname Nouveau Nom");
    }

    // Modifier le nom enregistré dans la configuration
    global.botname = newName;

    return reply(
        `✅ Nom du bot modifié !\nNouveau nom : ${newName}`
    );
}
break;