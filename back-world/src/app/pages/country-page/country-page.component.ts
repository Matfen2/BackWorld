import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.css'],
})
export class CountryPageComponent implements OnInit {
  countryId!: number;
  countryDetails: any;

  countryData = [
    {
      id: 1,
      pict: '/assets/picts/city/italie.jpeg',
      title: 'ITALIE',
      describe:
        'Séjour à Rome, nuits à Venise, virée à Capri, routes de Toscane ou bien circuit dans les Pouilles, chaque coin ici nous ramène à l’enfance. L’école et les livres d’histoire, les Romains, Florence. L’histoire vraie de Roméo et Juliette qui rend chaque rue de Vérone vibrante. Les ruelles en pente de Naples, qui rappellent un vieux décor de théâtre…. La Venise des palais, des gondoles et des pigeons ou la Venise déserte des chemins de traverse, ponts et canaux qui n’en finissent pas. Les saveurs de la pasta, il risotto, la pizza, et les gelati fondants. Et avant tout chose, bien mâcher les noms des lieux, ce sont les plus beaux qui sonnent le mieux et ont le meilleur goût !',
      firstCityPict: '/assets/picts/city/italie/sardaigne.jpg',
      secondCityPict: '/assets/picts/city/italie/florence.jpg',
      thirdCityPict: '/assets/picts/city/italie/venise.jpg',
    },
    {
      id: 2,
      pict: '/assets/picts/city/japon.jpeg',
      title: 'JAPON',
      describe:
        'Lors d’un voyage au Japon on commence par vivre la nuit : décalage horaire de plein fouet, Bill Murray nous l’a montré dans Lost in Translation, on est dans un drôle d’état, électrisé par le chaos poétique et urbain de Tokyo. Salarymen en goguette, Shibuya girls toutes griffes dehors, Prada, Chanel, Vuitton, créatures de Shinjuku fraîchement sorties des mangas du futur, collégiennes au col marin, sourire en douce. D’un coup de Shinkansen, bonjour le mont Fuji, vision furtive, presque subliminale, voici Kyoto, des temples et des jardins, dormir en ryokan ou minshuku et le soir venu, getas clic-claquants sur le pavé, quelques fantômes de geishas.',
      firstCityPict: '/assets/picts/city/japon/osaka.jpg',
      secondCityPict: '/assets/picts/city/japon/tokyo.jpg',
      thirdCityPict: '/assets/picts/city/japon/kyoto.jpg',
    },
    {
      id: 3,
      pict: '/assets/picts/city/grèce.jpeg',
      title: 'GRECE',
      describe:
        'Voyage en Grèce : dans le camp adverse le café, la salade, la pita sont turcs. Ici, on déguste un café grec, un sandwich grec, une salade grecque, feta tomate huile d’olive, grâce à laquelle on vivra longtemps. Puis on sauce l’assiette avec un morceau de pain plat. On regarde la mer qui change de couleur. D’hurlante la lumière se fait douce, ce sera bientôt l’heure de l’ouzo. Puis les rayons deviennent orange, c’est le signe, l’heure du pèlerinage de tous les étrangers vers la pointe de l’île, voir le soleil tomber dans la mer. Demain peut-être sera plus actif, on pourrait aller à la plage.',
      firstCityPict: '/assets/picts/city/grèce/athènes.jpg',
      secondCityPict: '/assets/picts/city/grèce/péloponnèse.jpg',
      thirdCityPict: '/assets/picts/city/grèce/crète.jpg',
    },
    {
      id: 4,
      pict: '/assets/picts/city/norvège.jpg',
      title: 'NORVEGE',
      describe:
        'Inspirez, expirez, l’ensemble est un grand bol d’air. Un voyage en Norvège c’est plonger dans un monde où l’eau s’insinue partout, là ou la terre ferme doit se faire mince et belle pour garder droit d’asile. Un voyage dans les fjords aux noms étranges Geiranger, Sognefjord, Lillehammer, des routes côtières, des canyons et des cascades limpides, des églises habillées de bois et des lacs profonds, des montagnes qui restent vertes, des forêts qui restent forêts, une nature qui reste nature, un vrai silence silencieux. On y croise de temps en temps, apparitions furtives, des lutins aux cheveux de paille claire, ou les maisons desdits lutins, planches colorées ou toit en herbe.',
      firstCityPict: '/assets/picts/city/norvège/oslo.jpg',
      secondCityPict: '/assets/picts/city/norvège/finnmark.jpg',
      thirdCityPict: '/assets/picts/city/norvège/lofoten.jpg',
    },
    {
      id: 5,
      pict: '/assets/picts/city/corée.jpeg',
      title: 'COREE DU SUD',
      describe:
        'Un voyage en Corée ? Eh oui dès le IXème siècle, les commerçants arabes l’avaient repérée : « au-delà de la Chine est une terre où l’or abonde et qui est appelée Silla. Les musulmans qui y sont allés ont été charmés par le pays et tendent à s’y installer et à abandonner toute idée de partir. » Pour les visiteurs que nous sommes, le pays du matin frais a calmé son dragon, et donne envie de se poser. Parcourir lentement la montagne vers la grotte de Seokguram et le temple du Bulguksa. Marcher sur les remparts de la forteresse de Hwaseong. Et, au cœur du chaos de Séoul, le doux sanctuaire confucéen de Jongmyo.',
      firstCityPict: '/assets/picts/city/corée/seoul.jpg',
      secondCityPict: '/assets/picts/city/corée/gyeongju.jpg',
      thirdCityPict: '/assets/picts/city/corée/ileDeJeju.jpg',
    },
    {
      id: 6,
      pict: '/assets/picts/city/inde.jpeg',
      title: 'INDE',
      describe:
        'On vous le contera lors d’un voyage en Inde : Krishna à la peau bleue aimait Radha à la peau claire. Il n’était pas content, Krishna, d’être plus foncé que sa bien-aimée. Mais les mères des dieux, comme toutes les mères, ont toujours des idées : elle lui dit de jeter de la couleur sur le visage de Radha. Chaque année, toute l’Inde célèbre cette histoire. C’est Holi, la fête où tout est permis. Les femmes en sari chic se saoulent de bhang, les foules dans les temples jouent aux groupies rock, chacun se transforme en arlequin mouvant, et le sol ressemble à un tableau abstrait géant. Happy Holi, l’Inde est sublimement folle, pour notre plus grand plaisir !',
      firstCityPict: '/assets/picts/city/inde/plagesDeGoa.jpg',
      secondCityPict: '/assets/picts/city/inde/tawang.jpg',
      thirdCityPict: '/assets/picts/city/inde/darjeeling.jpg',
    },
    {
      id: 7,
      pict: '/assets/picts/city/irlande.jpeg',
      title: 'IRLANDE',
      describe: 'Si vraiment vous n’avez pas de chance, vous verrez les côtes du Connemara sous un ciel d’un bleu pur. Car un voyage en Irlande est encore plus beau sous ses nuages tellement gris qu’ils en sont bleus, jouant à cache-cache avec le soleil, ombres qui rendent le paysage mouvant, couleurs fondues, une lumière douce et dramatique à la fois (quelques taches vives à Dublin, porte de couleur ou murs peints). Voici enfin l’averse, prétexte pour se refugier dans un pub et boire un Irish Coffee (si l’averse est le matin on traînera devant l’Irish Breakfast, œufs frits, saucisses, beans, mashed potatoes). Blasta !',
      firstCityPict: '/assets/picts/city/irlande/chausséeDesGéants.jpg',
      secondCityPict: '/assets/picts/city/irlande/dublin.jpg',
      thirdCityPict: '/assets/picts/city/irlande/belfast.jpg',
    },
    {
      id: 8,
      pict: '/assets/picts/city/londres.jpeg',
      title: 'ANGLETERRE',
      describe: "Des délicieux cottages aux jardins débordants de fleurs du Kent ou du Sussex aux gratte-ciels futuristes de Londres, des quais réhabilités de Liverpool aux collèges médiévaux d'Oxford et des ruines de Stonehenge au British Museum de Londres, l'Angleterre réserve mille trésors à ses visiteurs ! Il y a forcément un séjour en Angleterre qui vous ressemble, que vous privilégiez la découverte de la campagne anglaise, de ses vieux manoirs, de ses châteaux médiévaux et de ses villages fleuris chargés d'histoire ou que vous choisissiez de parcourir les centres villes de Londres, Liverpool ou Manchester ! Votre voyage en Angleterre sera tout à la fois sportif, culturel, dépaysant et plein de charme !",
      firstCityPict: '/assets/picts/city/angleterre/york.jpg',
      secondCityPict: '/assets/picts/city/angleterre/oxford.jpg',
      thirdCityPict: '/assets/picts/city/angleterre/cambridge.jpg',
    },
  ];

  constructor(private routes: ActivatedRoute) {}

  ngOnInit(): void {
    this.routes.params.subscribe((params) => {
      this.countryId = +params['id'];
      this.countryDetails = this.countryData.find(
        (destination) => destination.id === this.countryId
      );
    });
  }

  person = {
    user: '',
    email: '',
    message: '',
  };

  showContact(value: NgForm) {
    console.log(value);
  }
}
