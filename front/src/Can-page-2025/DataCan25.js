
const matches = [
    // Groupe A
    {
      groupe: "A",
      img: "cover1.jpeg",
      teams: "Maroc vs Comores",
      date: "2025-12-21",
      time: "20:00",
      stadium: "Complexe Sportif Prince Moulay Abdellah",
      prix: "200 DH"
    },
    {
      groupe: "A",
      img: "cover2.jpeg",
      teams: "Mali vs Zambie",
      date: "2025-12-22",
      time: "18:00",
      stadium: "Stade Mohammed V",
      prix: "250 DH"
    },
    {
      groupe: "A",
      img: "cover3.jpeg",
      teams: "Maroc vs Mali",
      date: "2025-12-26",
      time: "21:00",
      stadium: "Grand Stade d'Agadir",
      prix: "200 DH"
    },
    {
      groupe: "A",
      img: "cover4.jpeg",
      teams: "Comores vs Zambie",
      date: "2025-12-29",
      time: "18:00",
      stadium: "Grand Stade de Marrakech",
      prix: "250 DH"
    },
    {
      groupe: "A",
      img: "cover5.jpeg",
      teams: "Maroc vs Zambie",
      date: "2026-01-02",
      time: "21:00",
      stadium: "Stade de Tanger",
      prix: "200 DH"
    },
    {
      groupe: "A",
      img: "cover6.jpeg",
      teams: "Comores vs Mali",
      date: "2026-01-07",
      time: "20:00",
      stadium: "Stade El Barid",
      prix: "250 DH"
    },
  
    // Groupe B
    {
      groupe: "B",
      img: "cover7.jpeg",
      teams: "Afrique du Sud vs Égypte",
      date: "2025-12-22",
      time: "18:00",
      stadium: "Stade Prince Moulay El Hassan",
      prix: "250 DH"
    },
    {
      groupe: "B",
      img: "cover8.jpeg",
      teams: "Angola vs Égypte",
      date: "2025-12-26",
      time: "21:00",
      stadium: "Stade Mohammed V",
      prix: "200 DH"
    },
    {
      groupe: "B",
      img: "cover9.jpeg",
      teams: "Angola vs Zimbabwe",
      date: "2025-12-29",
      time: "20:00",
      stadium: "Grand Stade de Marrakech",
      prix: "250 DH"
    },
    {
      groupe: "B",
      img: "cover10.jpeg",
      teams: "Zimbabwe vs Afrique du Sud",
      date: "2025-12-31",
      time: "21:00",
      stadium: "Stade de Fès",
      prix: "200 DH"
    },
    {
      groupe: "B",
      img: "cover11.jpeg",
      teams: "Zimbabwe vs Angola",
      date: "2026-01-02",
      time: "20:00",
      stadium: "Stade d'Agadir",
      prix: "250 DH"
    },
    {
      groupe: "B",
      img: "cover12.jpeg",
      teams: "Afrique du Sud vs Angola",
      date: "2026-01-04",
      time: "21:00",
      stadium: "Grand Stade de Tanger",
      prix: "200 DH"
    },
  
    // Groupe C
    {
      groupe: "C",
      img: "cover1.jpeg",
      teams: "Nigeria vs Tanzanie",
      date: "2025-12-23",
      time: "20:00",
      stadium: "Stade Prince Moulay El Hassan",
      prix: "250 DH"
    },
    {
      groupe: "C",
      img: "cover1.jpeg",
      teams: "Nigeria vs Ouganda",
      date: "2025-12-27",
      time: "18:00",
      stadium: "Stade Mohammed V",
      prix: "200 DH"
    },
    {
      groupe: "C",
      img: "cover1.jpeg",
      teams: "Ouganda vs Tanzanie",
      date: "2025-12-30",
      time: "21:00",
      stadium: "Grand Stade de Marrakech",
      prix: "250 DH"
    },
    {
      groupe: "C",
      img: "cover1.jpeg",
      teams: "Nigeria vs Ouganda",
      date: "2026-01-02",
      time: "21:00",
      stadium: "Stade d'Agadir",
      prix: "200 DH"
    },
    {
      groupe: "C",
      img: "cover1.jpeg",
      teams: "Tanzanie vs Ouganda",
      date: "2026-01-04",
      time: "18:00",
      stadium: "Stade de Fès",
      prix: "250 DH"
    },
    {
      groupe: "C",
      img: "cover1.jpeg",
      teams: "Nigeria vs Tanzanie",
      date: "2026-01-07",
      time: "18:00",
      stadium: "Stade de Tanger",
      prix: "200 DH"
    },
  
    // Groupe D
    {
      groupe: "D",
      img: "cover1.jpeg",
      teams: " Congo vs Sénégal",
      date: "2025-12-23",
      time: "21:00",
      stadium: "Complexe Sportif Moulay Abdellah",
      prix: "250 DH"
    },
    {
      groupe: "D",
      img: "cover2.jpeg",
      teams: "Bénin vs Sénégal",
      date: "2025-12-27",
      time: "20:00",
      stadium: "Grand Stade de Casablanca",
      prix: "200 DH"
    },
    {
      groupe: "D",
      img: "cover1.jpeg",
      teams: "Botswana vs Congo",
      date: "2025-12-30",
      time: "21:00",
      stadium: "Stade Mohammed V",
      prix: "250 DH"
    },
    {
      groupe: "D",
      img: "cover2.jpeg",
      teams: "Sénégal vs Botswana",
      date: "2026-01-02",
      time: "20:00",
      stadium: "Stade de Tanger",
      prix: "200 DH"
    },
    {
      groupe: "D",
      img: "cover1.jpeg",
      teams: "Bénin vs Botswana",
      date: "2026-01-05",
      time: "21:00",
      stadium: "Grand Stade d'Agadir",
      prix: "250 DH"
    },
    {
      groupe: "D",
      img: "cover2.jpeg",
      teams: "Congo vs Bénin",
      date: "2026-01-07",
      time: "18:00",
      stadium: "Stade de Fès",
      prix: "200 DH"
    },
  
    // Groupe E
    {
      groupe: "E",
      img: "cover1.jpeg",
      teams: "Algérie vs Soudan",
      date: "2025-12-24",
      time: "20:00",
      stadium: "Stade Mohammed V",
      prix: "200 DH"
    },
    {
      groupe: "E",
      img: "cover2.jpeg",
      teams: "Algérie vs Burkina Faso",
      date: "2025-12-28",
      time: "21:00",
      stadium: "Grand Stade d'Agadir",
      prix: "250 DH"
    },
    {
      groupe: "E",
      img: "cover1.jpeg",
      teams: "Guinée Équatoriale vs Algérie",
      date: "2025-12-31",
      time: "21:00",
      stadium: "Stade Mohammed V",
      prix: "200 DH"
    },
    {
      groupe: "E",
      img: "cover2.jpeg",
      teams: "Soudan vs Burkina Faso",
      date: "2026-01-02",
      time: "20:00",
      stadium: "Stade d'Agadir",
      prix: "250 DH"
    },
    {
      groupe: "E",
      img: "cover1.jpeg",
      teams: "Algérie vs Guinée Équatoriale",
      date: "2026-01-05",
      time: "21:00",
      stadium: "Stade Mohammed V",
      prix: "200 DH"
    },
    {
      groupe: "E",
      img: "cover2.jpeg",
      teams: "Soudan vs Guinée Équatoriale",
      date: "2026-01-07",
      time: "18:00",
      stadium: "Stade de Tanger",
      prix: "250 DH"
    },
  
    // Groupe F
    {
      groupe: "F",
      img: "cover1.jpeg",
      teams: "Cameroun vs Gabon",
      date: "2025-12-24",
      time: "18:00",
      stadium: "Stade El Barid",
      prix: "250 DH"
    },
    {
      groupe: "F",
      img: "cover2.jpeg",
      teams: "Côte d'Ivoire vs Gabon",
      date: "2025-12-28",
      time: "20:00",
      stadium: "Grand Stade de Marrakech",
      prix: "200 DH"
    },
    {
      groupe: "F",
      img: "cover1.jpeg",
      teams: "Gabon vs Côte d'Ivoire",
      date: "2025-12-31",
      time: "21:00",
      stadium: "Stade Prince Moulay Abdellah",
      prix: "250 DH"
    },
    {
      groupe: "F",
      img: "cover1.jpeg",
      teams: "Cameroun vs Côte d'Ivoire",
      date: "2026-01-02",
      time: "20:00",
      stadium: "Grand Stade de Casablanca",
      prix: "200 DH"
    },
    {
      groupe: "F",
      img: "cover2.jpeg",
      teams: "Gabon vs Cameroun",
      date: "2026-01-04",
      time: "21:00",
      stadium: "Stade Mohammed V",
      prix: "250 DH"
    },
    {
      groupe: "F",
      img: "cover1.jpeg",
      teams: "Côte d'Ivoire vs Cameroun",
      date: "2026-01-07",
      time: "18:00",
      stadium: "Grand Stade de Tanger",
      prix: "200 DH"
    }
  ];
  
  export default matches;