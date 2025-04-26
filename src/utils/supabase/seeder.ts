import { createClient } from '@supabase/supabase-js';
import { faker } from "@faker-js/faker";
// import { seederAddresses } from './seeder_addresses';

const seederAddresses = [
    {
      "latitude": 16.410749507732778,
      "longitude": 120.58761795337482,
      "address": "117, Purok 7, City Camp Central, District 5, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.39155601581625,
      "longitude": 120.58280497938657,
      "address": "Santo Niño Road, Santo Niño, Bakakeng Central, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.414765616011497,
      "longitude": 120.59924115178106,
      "address": "122 Dormitory and Apartments, 122, A. Bonifacio Road, Purok 3, Lower General Luna, District 20, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.414207002460817,
      "longitude": 120.59973340297036,
      "address": "7 C, Laurel Street, Purok 1, Holy Ghost Hill Proper, District 20, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.414229019807298,
      "longitude": 120.59984390339238,
      "address": "7 B, Laurel Street, Purok 1, Holy Ghost Hill Proper, District 20, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.414247356425516,
      "longitude": 120.59994725389784,
      "address": "7 A, Laurel Street, Purok 1, Holy Ghost Hill Proper, District 20, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430653894338118,
      "longitude": 120.59972682366148,
      "address": "116 K, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.409822403785856,
      "longitude": 120.58998988701104,
      "address": "79 B, City Camp Alley, Purok 5, City Camp Proper, District 5, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.40706261263066,
      "longitude": 120.59497606775663,
      "address": "Kisad Road, Purok 1, Burnham Legarda, District 4, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.40952276364732,
      "longitude": 120.60052822315495,
      "address": "Casa Vallejo, Upper Session Road, Session Road, District 10, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.410113251269696,
      "longitude": 120.59152526712192,
      "address": "Prince Plaza Hotel, 15, Legarda Road, Purok 4, Burnham Legarda, District 4, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.411341661569946,
      "longitude": 120.58165713642062,
      "address": "Skyrise Hotel, Dominican Hill Road, Purok 6, San Roque Village, District 15, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.41215270629862,
      "longitude": 120.58213947849204,
      "address": "125, Dominican Hill Road, Purok 6, San Roque Village, District 15, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.424900945506966,
      "longitude": 120.59686749391908,
      "address": "67, M. Roxas Street, Purok 2, Alfonso Tabora, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.411696789934002,
      "longitude": 120.5894634795475,
      "address": "Cordillera Parents Federation, Inc., 12, Urbano Street, Purok 2, Palma-Urbano, District 5, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.42312385840845,
      "longitude": 120.58389372430734,
      "address": "Philippine Baptist Theological Seminary, 19, Tacay Road, Guisad Central, District 7, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.42353981704777,
      "longitude": 120.58399042659528,
      "address": "Philippine Baptist Theological Seminary, 19, Tacay Road, Guisad Central, District 7, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.415339546834918,
      "longitude": 120.5837316203836,
      "address": "Upper Fairview Road, Purok 6, Quezon Hill Proper, District 16, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.415594455914334,
      "longitude": 120.58388598235078,
      "address": "Upper Fairview Road, Purok 6, Fairview, District 6, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.41716614676251,
      "longitude": 120.61073817771326,
      "address": "***** Mini Grocery, 1, Everlasting Street, Navy Base - Polo Field, Saint Joseph Village, District 1, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.417231950000005,
      "longitude": 120.6238154,
      "address": "Queen's Nest Condominiums, Moran Street, Purok 5, Gibraltar, District 1, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430024786718008,
      "longitude": 120.59955643140604,
      "address": "99 B, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.4046319,
      "longitude": 120.5946569,
      "address": "1896 Bed and Bath, Quimson Road, Purok 1, Burnham Legarda, District 4, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.39931616900674,
      "longitude": 120.58623398048456,
      "address": "Summer Pines Baguio, Ben Palispis Highway, Imelda Romualdez Marcos, District 4, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.39197454880535,
      "longitude": 120.59077729084665,
      "address": "7-Eleven, Balong Calse Road, Purok 5, Bakakeng Norte, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.38255349000728,
      "longitude": 120.57002968137004,
      "address": "Garden Villa 4, Green Valley Village Phase 1, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.38282567965003,
      "longitude": 120.5694941745737,
      "address": "Garden Villa 6, Green Valley Village Phase 1, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.38244509612524,
      "longitude": 120.56925892178826,
      "address": "Quadrant 7, Green Valley Village Phase 2, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.3819322,
      "longitude": 120.56946980000002,
      "address": "14, Green Valley Village Phase 2, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.38232565,
      "longitude": 120.5700949,
      "address": "Garden Villa 3, Green Valley Village Phase 1, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.382434647531294,
      "longitude": 120.56968907254011,
      "address": "Beci Garden Villa Drive 1, Dontogan, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.382780405147567,
      "longitude": 120.56981763927716,
      "address": "Garden Villa 5, Green Valley Village Phase 1, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.384062724488732,
      "longitude": 120.59423408020098,
      "address": "Harvard, 10, Bareng Drive, Montebello Subdivision, Bakakeng Norte, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.384206565196504,
      "longitude": 120.59442473328563,
      "address": "Princeton, 10, Bareng Drive, Montebello Subdivision, Bakakeng Norte, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.38356369842675,
      "longitude": 120.59378001822635,
      "address": "Arc Residences, 8, Bareng Drive, Montebello Subdivision, Bakakeng Norte, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.416732244337936,
      "longitude": 120.60674633683826,
      "address": "Purok 5, Brentwood Village, District 20, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.373016425049162,
      "longitude": 120.61170201294208,
      "address": "Pongian Road Extension, Pongian, Loakan Proper, District 12, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.3729476,
      "longitude": 120.61157839999998,
      "address": "Pongian Road Extension, Pongian, Loakan Proper, District 12, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.3729184,
      "longitude": 120.6117591,
      "address": "Pongian Road Extension, Pongian, Loakan Proper, District 12, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.37309262439411,
      "longitude": 120.61199781338924,
      "address": "Purok Pongian Road, Pongian, Loakan Proper, District 12, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.411799654719534,
      "longitude": 120.58952614542758,
      "address": "Cordillera Parents Federation, Inc., 12, Urbano Street, Purok 2, Palma-Urbano, District 5, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.411248054689175,
      "longitude": 120.58632519463444,
      "address": "Delollipop Boarding House, 63, Queen of Peace Road, Purok 5, Lourdes Extension, District 15, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.412766117764665,
      "longitude": 120.58771535969444,
      "address": "16, Queen of Peace Road, Zarate Subdivision, MRR Queen of Peace, District 6, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.4128814016611,
      "longitude": 120.5876013178057,
      "address": "16, Queen of Peace Road, Zarate Subdivision, MRR Queen of Peace, District 6, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.412967597207956,
      "longitude": 120.60340397032326,
      "address": "Brent Road, Cabinet Hill, Cabinet Hill - Teachers Camp, District 2, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.40407047552418,
      "longitude": 120.59469508929894,
      "address": "Señor Sabrozo, 46, Montinola Subdivision Road, Montinola Subdivision, Burnham Legarda, District 4, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.404237884719187,
      "longitude": 120.5945729883852,
      "address": "Señor Sabrozo, 46, Montinola Subdivision Road, Montinola Subdivision, Burnham Legarda, District 4, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.4095004429048,
      "longitude": 120.59107192916224,
      "address": "Ze Creamery, Bukaned Street, Purok 5, Burnham Legarda, District 4, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.407941963255944,
      "longitude": 120.59061608619838,
      "address": "Lower Doctor Jose Cariño Street, Purok 4, Lower Quirino Magsaysay, District 5, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.380826999999996,
      "longitude": 120.5713884,
      "address": "Greenvalley Phase 4 Road 2 Extension, Dontogan, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.416767900261522,
      "longitude": 120.59868002622254,
      "address": "Mother Mary Building, A. Bonifacio Road, Purok 3, A.B.C.R., District 18, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.416140412260628,
      "longitude": 120.6085335543175,
      "address": "Gab's Cozy Homes Bonbel, Navy Base Road Extension, Purok 20, Saint Joseph Village, District 1, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.38246365,
      "longitude": 120.5658912,
      "address": "107, Green Valley Village Phase 3, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.413013131538282,
      "longitude": 120.5997560166223,
      "address": "Gigadrive Computer Sales, Upper General Luna Road, Upper General Luna, District 10, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.422543330050043,
      "longitude": 120.61907641505154,
      "address": "Baguio Tiptop Vacation Homes, Tiptop Road, Purok 5, Pacdal, District 1, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.393448518257326,
      "longitude": 120.60766745452024,
      "address": "Hillside Road, Cariño Subdivision, Upper Dagsian, District 3, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.416382951740104,
      "longitude": 120.5978131152956,
      "address": "Saint Louis University, A. Bonifacio Road, A.B.C.R., District 18, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.38186013882271,
      "longitude": 120.60636873094596,
      "address": "MyBaguioHaus, 203, Kennon Road, Cariño Village, Camp 7, District 13, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.383363316370097,
      "longitude": 120.59363401079032,
      "address": "6b, Bareng Drive, Montebello Subdivision, Bakakeng Norte, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.402973885620735,
      "longitude": 120.59903185032712,
      "address": "Reef Events Center, 166-C, Military Cut-off Road, Military Cut-Off, District 13, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.418679630796937,
      "longitude": 120.59869590379078,
      "address": "7-Eleven, A. Bonifacio Road, Purok 3, Honeymoon, District 20, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.418486262681338,
      "longitude": 120.59881436381362,
      "address": "Ali's House of Shawarma, A. Bonifacio Road, Purok 3, Honeymoon, District 20, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.419603002596826,
      "longitude": 120.59718025886596,
      "address": "Linkage Web Development, 2nd Floor NBV Bldg., A. Bonifacio Road, A.B.C.R., District 18, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.418877792558053,
      "longitude": 120.59659926680078,
      "address": "McDonald's, A. Bonifacio Road, A.B.C.R., District 18, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.412044123866206,
      "longitude": 120.60011394631928,
      "address": "Curadent Dental Clinic, Sandico Street, Salud Mitra, District 10, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.411758242817793,
      "longitude": 120.60031244337618,
      "address": "Sandico Street, Salud Mitra, District 10, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.412296893106546,
      "longitude": 120.60033358694818,
      "address": "Calalily Apartments, 02, Angelina T. Tecson Street, Salud Mitra, District 10, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.41869291767246,
      "longitude": 120.59514279545007,
      "address": "Dad's Dental Laboratory, 268, Magsaysay Avenue, Lower Magsaysay, District 7, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.41359543498475,
      "longitude": 120.5996094607447,
      "address": "Lugaw Republic, S. Laurel Street, Upper General Luna, District 10, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.413897976777438,
      "longitude": 120.5996577848638,
      "address": "S. Laurel Street, Holy Ghost Hill Proper, District 20, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.411921715805907,
      "longitude": 120.58219831516324,
      "address": "AHB Inn, 125, Dominican Hill Road, Purok 6, San Roque Village, District 15, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.41117012792297,
      "longitude": 120.58154867450826,
      "address": "20, Dominican Hill Road, Purok 6, San Roque Village, District 15, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.40318855,
      "longitude": 120.59388230000002,
      "address": "Baguio Diamond Suites, Legarda Road, Purok 3, Burnham Legarda, District 4, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.403321395416285,
      "longitude": 120.59380136046993,
      "address": "Baguio Diamond Suites, Legarda Road, Purok 3, Burnham Legarda, District 4, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.403754372498412,
      "longitude": 120.59397027021376,
      "address": "Hotel Henrico, Legarda Road, Purok 3, Burnham Legarda, District 4, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.38176115,
      "longitude": 120.5660864,
      "address": "Sampaguita, Dontogan, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.381705350000004,
      "longitude": 120.57018675000002,
      "address": "Garden Villa A, Green Valley Village Phase 1, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.380355155466344,
      "longitude": 120.5713601213867,
      "address": "Green Valley Junction, Green Valley Village, Green Valley Village Phase 6, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.380167367443633,
      "longitude": 120.57140280860638,
      "address": "Santo Tomas Road, The Pine Cones, Dontogan, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.412622373700408,
      "longitude": 120.58735666387962,
      "address": "16, Queen of Peace Road, Zarate Subdivision, MRR Queen of Peace, District 6, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.412634585323406,
      "longitude": 120.58767260028804,
      "address": "16, Queen of Peace Road, Zarate Subdivision, MRR Queen of Peace, District 6, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.41242012928005,
      "longitude": 120.60046220938564,
      "address": "GoPets, Happy Glen Loop, Salud Mitra, District 10, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.412460783413433,
      "longitude": 120.6000567744496,
      "address": "Coffee Spot, Angelina T. Tecson Street, Salud Mitra, District 10, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.41292550314623,
      "longitude": 120.6007790512018,
      "address": "Tokyo Music Club, S. Laurel Street, Upper General Luna, District 10, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.386974252241426,
      "longitude": 120.60019735873176,
      "address": "R&D Apartment Complex, 6, Amparo Heights Street, Petersville Subdivision, Camp 7, District 13, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.40855865,
      "longitude": 120.59314085,
      "address": "Pines Garage Baguio Terminal, M. H. del Pilar Street, Purok 7, Burnham Legarda, District 4, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.384439169515144,
      "longitude": 120.58853388330078,
      "address": "Eagle Crest Subdivision Phase 2, Santo Thomas Proper, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.384461383070324,
      "longitude": 120.59474705921792,
      "address": "Saint Louis University - Maryheights Campus, Eagle Crest Drive 1, Eagle Crest Subdivision Phase 1, Bakakeng Norte, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.411533266462563,
      "longitude": 120.60053830878148,
      "address": "University of Baguio Laboratory Elementary School, Happy Glen Loop, Salud Mitra, District 10, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.421228693342766,
      "longitude": 120.59813469723916,
      "address": "A and M Causa Apartment, 113, New Lucban Extension Road, Purok 5, New Lucban, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.414843334173764,
      "longitude": 120.59965999477902,
      "address": "Hackspace Makerspace and Cafe, 3, Juan Sumulong Street, Purok 1, Holy Ghost Hill Proper, District 20, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.413125294877933,
      "longitude": 120.60225028313646,
      "address": "The Terrace Condominium, 7, Laubach Road, Upper General Luna, District 10, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.381885262082413,
      "longitude": 120.57012062414948,
      "address": "Garden Villa 1, Green Valley Village Phase 1, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.38210727416755,
      "longitude": 120.5701097444426,
      "address": "Garden Villa 2, Green Valley Village Phase 1, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.413087299999997,
      "longitude": 120.60281865,
      "address": "Family Home Transient House, Laubach Road, Upper General Luna, District 10, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.412730726062748,
      "longitude": 120.60321441852398,
      "address": "Brent Road, Cabinet Hill, Cabinet Hill - Teachers Camp, District 2, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.412768205586612,
      "longitude": 120.60263707211236,
      "address": "6, Laubach Road, Upper General Luna, District 10, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.38196923084916,
      "longitude": 120.56527127421018,
      "address": "SCSS Alley 2, Carmel Heights, Dontogan, District 14, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.423130409465102,
      "longitude": 120.6007972668951,
      "address": "Central Apartments Parking, Trancoville, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.423352289197123,
      "longitude": 120.60066753171972,
      "address": "Central Apartments Parking, Trancoville, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.42310695,
      "longitude": 120.60056995,
      "address": "Central Apartments Parking, Trancoville, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.42332142054737,
      "longitude": 120.60047909452874,
      "address": "Central Apartments Parking, Trancoville, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.423119474970626,
      "longitude": 120.59940024441904,
      "address": "112, M. Roxas Street, Trancoville, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.427473876420656,
      "longitude": 120.59859366219727,
      "address": "12 A, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.428015254747738,
      "longitude": 120.5982671181157,
      "address": "8 C, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.428077448544588,
      "longitude": 120.59776470303724,
      "address": "1 A, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.4281609328205,
      "longitude": 120.5978170918834,
      "address": "2, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.4281636333197,
      "longitude": 120.59761884685288,
      "address": "1, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.428299497178315,
      "longitude": 120.5978603270081,
      "address": "3, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.42837421688155,
      "longitude": 120.5980151983978,
      "address": "4, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.428712718924437,
      "longitude": 120.59785659883586,
      "address": "15, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.42855232455751,
      "longitude": 120.59787237700392,
      "address": "15, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.428455349999997,
      "longitude": 120.5977171,
      "address": "13, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.425829816037666,
      "longitude": 120.60048785070708,
      "address": "Dioquino Apartments, 70, Upper Malvar Street, Trancoville, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.426678506534486,
      "longitude": 120.59279500727224,
      "address": "11, Camdas Main Road, Purok 2, Camdas, District 8, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.42700630497842,
      "longitude": 120.59179667690626,
      "address": "83, Princess Urduja Street, Purok 4, Camdas, District 8, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.423316470982243,
      "longitude": 120.58426237515908,
      "address": "Philippine Baptist Theological Seminary, 19, Tacay Road, Guisad Central, District 7, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.423725747129062,
      "longitude": 120.58401052529766,
      "address": "Philippine Baptist Theological Seminary, 19, Tacay Road, Guisad Central, District 7, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.421358251758136,
      "longitude": 120.57767245502592,
      "address": "28, Purok 9, Pinsao Proper, District 16, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.411301630718093,
      "longitude": 120.57867904277246,
      "address": "Joliathan Laundry Shop, Asin Road, Old Site, San Luis Village, District 15, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.411352865677408,
      "longitude": 120.57858318917724,
      "address": "Joliathan Laundry Shop, Asin Road, Old Site, San Luis Village, District 15, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.411112400000007,
      "longitude": 120.5850142,
      "address": "Queen of Peace Road, Purok 5, Lourdes Extension, District 15, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.38781802418854,
      "longitude": 120.60083581874818,
      "address": "K-Mart Mini Korean Grocery, Kennon Road, Petersville Subdivision, Camp 7, District 13, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.431052339849554,
      "longitude": 120.59758398031472,
      "address": "125, Purok 2, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43094215,
      "longitude": 120.59754245,
      "address": "125 B, Purok 2, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43091005,
      "longitude": 120.59743379999998,
      "address": "125 D, Purok 2, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.4311852,
      "longitude": 120.5992934,
      "address": "118, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43106983426601,
      "longitude": 120.60049022598618,
      "address": "117 A, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.431718817326214,
      "longitude": 120.5982699034827,
      "address": "347, Bell Church Road, Purok 2, North Sanitary Camp, District 17, La Trinidad, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.412158776905763,
      "longitude": 120.61823509871996,
      "address": "Outlook Drive, Country Estate, Country Club, District 11, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43019859018579,
      "longitude": 120.58588649946422,
      "address": "Garnet Street, Purok 11, Pinget, District 8, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430050044678552,
      "longitude": 120.58600812384982,
      "address": "Garnet Street, Purok 11, Pinget, District 8, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.414406311461423,
      "longitude": 120.58616143241024,
      "address": "88, Sixto Gaerlan Street, Campo Filipino, District 6, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.41484151970784,
      "longitude": 120.61663707860195,
      "address": "Chateau de Maisons, 246, V. L. Romulo Drive, Hanbi Mansions, Lualhati, District 11, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.403536996388002,
      "longitude": 120.56460193427004,
      "address": "209, Molave Drive, Purok 3, Asin Road, District 15, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43041102589663,
      "longitude": 120.59720958623794,
      "address": "134 A, Purok 2, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430500032532922,
      "longitude": 120.59706822232836,
      "address": "134, Purok 2, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429275232425162,
      "longitude": 120.59815402487511,
      "address": "27, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.42883865,
      "longitude": 120.5978971,
      "address": "16, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429033849999996,
      "longitude": 120.59803404999998,
      "address": "24 A, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429142558504395,
      "longitude": 120.59807467818938,
      "address": "27, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.4291376,
      "longitude": 120.5981729,
      "address": "23, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429029139990313,
      "longitude": 120.59875482102572,
      "address": "54, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.42866175,
      "longitude": 120.59837419999998,
      "address": "58 A, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.428736847567283,
      "longitude": 120.59942850693037,
      "address": "68 A, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.427711868391476,
      "longitude": 120.59885735903956,
      "address": "62, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.427599940276515,
      "longitude": 120.59870987179237,
      "address": "62 B, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.427680900000002,
      "longitude": 120.59909335000002,
      "address": "62, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430338200290933,
      "longitude": 120.59877423328324,
      "address": "90 B, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429937678452678,
      "longitude": 120.59990842240444,
      "address": "99 E, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.42497741027318,
      "longitude": 120.59461599390109,
      "address": "Quinio Ballesteros Dental Clinic, 29, Purok 1, Alfonso Tabora, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43056501798391,
      "longitude": 120.59727296087767,
      "address": "132, Purok 2, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430595989775835,
      "longitude": 120.59739437076703,
      "address": "132 A, Purok 2, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43080986970112,
      "longitude": 120.59743992277788,
      "address": "125 F, Purok 2, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43078341889746,
      "longitude": 120.59730404738774,
      "address": "129, Purok 2, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43004862272972,
      "longitude": 120.5980722087212,
      "address": "93 B, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430121981191736,
      "longitude": 120.5981476264909,
      "address": "93 C, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43021069369824,
      "longitude": 120.59821207976238,
      "address": "91, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430007541834414,
      "longitude": 120.5985746750099,
      "address": "88, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429919956873675,
      "longitude": 120.59846616744017,
      "address": "88 B, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429821294670585,
      "longitude": 120.59840920561535,
      "address": "37 B, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429617392995613,
      "longitude": 120.59807421790477,
      "address": "37 A, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429574200000005,
      "longitude": 120.59813925000005,
      "address": "39, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429706516940616,
      "longitude": 120.5983112008736,
      "address": "42, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.4295205406649,
      "longitude": 120.59801861946526,
      "address": "38, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429313481550075,
      "longitude": 120.59808286940088,
      "address": "28, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429591083718307,
      "longitude": 120.5985972082264,
      "address": "85C, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430779364379482,
      "longitude": 120.60009975827892,
      "address": "116 E, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430758561774503,
      "longitude": 120.60041754536869,
      "address": "119, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.407786428881064,
      "longitude": 120.57971256445651,
      "address": "51, Saint Theresa Extension Street, Malaya Village, Dominican Mirador, District 15, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.423002311231883,
      "longitude": 120.6072540332122,
      "address": "75, Abokado Alley, Purok 2, East Modern Site, District 19, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.414130766234912,
      "longitude": 120.57813710315862,
      "address": "JasJem Building, 7, T. Lipnica Street, Purok 4, Victoria Village, District 16, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.414177403749218,
      "longitude": 120.57817170793456,
      "address": "JasJem Building, 7, T. Lipnica Street, Purok 4, Victoria Village, District 16, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.376018935416916,
      "longitude": 120.6118132754666,
      "address": "Kofia de Rico, 11, Heavens Garden Road, Kudirao, Loakan Proper, District 12, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.39583993019617,
      "longitude": 120.59699388782884,
      "address": "San Vicente Subdivision Road, San Vicente, District 13, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.427929205114985,
      "longitude": 120.59822316823325,
      "address": "8 A, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.427729333348744,
      "longitude": 120.59843992519336,
      "address": "10, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429808731144327,
      "longitude": 120.59776237497576,
      "address": "32, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429315350874113,
      "longitude": 120.5983387836282,
      "address": "48, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429361083587022,
      "longitude": 120.59831075547832,
      "address": "47, Purok 3, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.429921905917144,
      "longitude": 120.59964306262682,
      "address": "99 D, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430780650652252,
      "longitude": 120.60021344752712,
      "address": "118, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430693590987136,
      "longitude": 120.6001782890638,
      "address": "118 A, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43075067120526,
      "longitude": 120.59950685057632,
      "address": "117 G, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43106419668717,
      "longitude": 120.6002017622263,
      "address": "115, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43015903986839,
      "longitude": 120.5993338766098,
      "address": "Piraso Resort, 99 C, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.42984116171028,
      "longitude": 120.60001697865764,
      "address": "80 A, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430688887803687,
      "longitude": 120.59886641696244,
      "address": "117 R, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430650549831505,
      "longitude": 120.5990172240586,
      "address": "117 S, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.431014442241185,
      "longitude": 120.59918590025548,
      "address": "117 I, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43094132595244,
      "longitude": 120.59902718250788,
      "address": "117 J, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.427551715113935,
      "longitude": 120.59898377144808,
      "address": "62 A, Evangelista Street, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430408446124705,
      "longitude": 120.59883030470876,
      "address": "90 A, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430728327777608,
      "longitude": 120.59987341516693,
      "address": "116 A, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430773171868548,
      "longitude": 120.6003014769266,
      "address": "116 H, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43086457986012,
      "longitude": 120.60069711748388,
      "address": "118 C, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.430958279263947,
      "longitude": 120.60007854370372,
      "address": "116 C, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43095935048527,
      "longitude": 120.5999624973423,
      "address": "116 C, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43099190527743,
      "longitude": 120.59940650677451,
      "address": "117 J-2, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43122011525266,
      "longitude": 120.59961009123803,
      "address": "117 E, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.431119356330765,
      "longitude": 120.59960470820674,
      "address": "117 L, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.431107853460684,
      "longitude": 120.5995044739564,
      "address": "117 J-1, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.431271202919703,
      "longitude": 120.59946751039924,
      "address": "117 C, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.431066933668898,
      "longitude": 120.59996721821608,
      "address": "116 B, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.43119158724672,
      "longitude": 120.59976857176362,
      "address": "117 D, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.427814997191458,
      "longitude": 120.59912696175913,
      "address": "62, Evangelista Street, Purok 1, North Sanitary Camp, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    },
    {
      "latitude": 16.42604563305084,
      "longitude": 120.59824632738248,
      "address": "Don Bosco Church, Don Bosco Street, Trancoville, District 17, Baguio, Cordillera Administrative Region, 2600, Pilipinas"
    }
  ]

export const supabase = createClient(
'https://kxkkueirrfwmrrurarhw.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt4a2t1ZWlycmZ3bXJydXJhcmh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgzOTU0MDksImV4cCI6MjA0Mzk3MTQwOX0.0wYrClWwRDNDwyWM5dyvYfvv-t1BBzBBA1t4H1qP6S0'
);

// --- 1. Seed company ---
const seedCompanies = async () => {
    // const companies = Array.from({ length: 1 }, () => ({
    //   company_name: faker.company.name(),
    //   about: faker.lorem.paragraph(),
    //   address: faker.location.streetAddress({ useFullAddress: true }),
    //   owner_id: faker.helpers.arrayElement([
    //     "6f152775-98f5-42d4-8307-9b5c52d2aa2b", // add more properties for this user
    //   ]),
    //   has_business_permit: faker.helpers.arrayElement([
    //     'approved',
    //     'pending',
    //     'missing',
    //   ]),
    //   logo: faker.image.urlPicsumPhotos(),
    //   created_at: new Date().toISOString(),
    // }));
  
    const { data, error } = await supabase
      .from('company')
      .select('*')
      .eq('owner_id', 'a0db4315-5465-4ea7-b2c8-5c162dfcc919');
      
    if (error) throw error;
    return data;
};

// --- 2. Seed properties ---
const seedProperties = async (companies) => {
  for (const company of companies) {
    for (const address of seederAddresses) {
      try {
        await supabase.rpc('insert_property_details', {
          p_address: address.address,
          p_lat: address.latitude,
          p_lng: address.longitude,
          p_description: faker.lorem.paragraph(),
          p_title: faker.person.firstName() + "'s property",
          p_structure: faker.helpers.arrayElement(['apartment', 'dormitory', 'condominium']),
          p_company_id: company.id,
        });
      } catch (error) {
        console.error('Error inserting property:', error);
      }
    }
  }

  // After inserting, select all properties for those companies
  const { data: properties, error } = await supabase
    .from('property')
    .select('*')
    .in('company_id', companies.map((c) => c.id));

  if (error) throw error;
  return properties;
};

// --- 3. Seed Units ---
const seedUnits = async (properties) => {
  const units = properties.flatMap((property) => {
    const numUnits = faker.number.int({ min: 1, max: 5 }); // 1-5 units per property
    return Array.from({ length: numUnits }, () => ({
      unit_code: faker.string.alphanumeric(10),
      property_id: property.id,
      price: faker.number.int({ min: 1000, max: 10000 }),
      title: `${faker.person.firstName()}'s unit`,
      privacy_type: faker.helpers.arrayElement(['shared', 'private']),
      bedrooms: faker.number.int({ min: 1, max: 5 }),
      beds: faker.number.int({ min: 1, max: 5 }),
      occupants: faker.number.int({ min: 1, max: 5 }),
      isReserved: faker.datatype.boolean(),
      current_occupants: faker.number.int({ min: 0, max: 5 }),
      unit_image: [faker.image.urlPicsumPhotos()],
      outside_view: faker.datatype.boolean(),
      room_size: faker.number.float({ min: 10, max: 100, fractionDigits: 2 }),
      contract: faker.date.future(),
    }));
  });

  const { data, error } = await supabase.from('unit').insert(units).select();

  if (error) throw error;
  return data;
};


// --- 3. Run Seed ---
const runSeed = async () => {
    try {
      const companies = await seedCompanies();
      console.log('Companies Seeded:', companies);
      const properties = await seedProperties(companies);
      console.log('Properties Seeded:', properties);
      const units = await seedUnits(properties);
      console.log('Units Seeded:', units);
    } catch (error) {
      console.error('Error seeding:', error);
    }
};

runSeed();