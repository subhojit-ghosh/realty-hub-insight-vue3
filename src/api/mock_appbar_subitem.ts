const Menu = [
  {
    name: 'Home',
    link: '/'
  },
  {
    name: 'Buy',
    tabs: [
      { id: '1', name: 'Property For Sale', link: '/buy-property' },
      { id: '2', name: 'Sole Agent Listings', link: '/sole-agents' },
      { id: '3', name: 'Recently Sold', link: '/recently-sold' },
      {
        id: '4',
        name: 'District',
        subitems: [
          {
            id: '1',
            name: 'Aberdeen',
            link: '/district-lists'
          },
          {
            id: '2',
            name: 'Ap Lei Chau',
            link: '/district-lists'
          },
          {
            id: '3',
            name: 'Braemar Hill',
            link: '/district-lists'
          },
          {
            id: '4',
            name: 'Central',
            link: '/district-lists'
          },
          {
            id: '5',
            name: 'Cheung Sha',
            link: '/district-lists'
          },
          {
            id: '6',
            name: 'Chung Hom Kok',
            link: '/district-lists'
          },
          {
            id: '7',
            name: 'Clear Water Bay',
            link: '/district-lists'
          },
          {
            id: '8',
            name: 'Deep Water Bay',
            link: '/district-lists'
          },
          {
            id: '9',
            name: 'Discovery Bay',
            link: '/district-lists'
          },
          {
            id: '10',
            name: 'Happy Valley',
            link: '/district-lists'
          },
          {
            id: '11',
            name: "Jardine's Lookout",
            link: '/district-lists'
          },
          {
            id: '12',
            name: 'Kennedy Town',
            link: '/district-lists'
          },
          {
            id: '13',
            name: 'Mid Levels Central',
            link: '/district-lists'
          },
          {
            id: '14',
            name: 'Mid Levels East',
            link: '/district-lists'
          },
          {
            id: '15',
            name: 'Mid Levels West',
            link: '/district-lists'
          },
          {
            id: '16',
            name: 'North Point',
            link: '/district-lists'
          },
          {
            id: '17',
            name: 'Peak',
            link: '/district-lists'
          },
          {
            id: '18',
            name: 'Pok Fu Lam',
            link: '/district-lists'
          },
          {
            id: '19',
            name: 'Repulse Bay',
            link: '/district-lists'
          },
          {
            id: '20',
            name: 'Sai Kung',
            link: '/district-lists'
          },
          {
            id: '21',
            name: 'Sai Wan',
            link: '/district-lists'
          },
          {
            id: '22',
            name: 'Sai Ying Pun',
            link: '/district-lists'
          },
          {
            id: '23',
            name: 'Shau Kei Wan',
            link: '/district-lists'
          },
          {
            id: '24',
            name: 'Shek O',
            link: '/district-lists'
          },
          {
            id: '25',
            name: 'Sheung Wan',
            link: '/district-lists'
          },
          {
            id: '26',
            name: 'Shouson Hill',
            link: '/district-lists'
          },
          {
            id: '27',
            name: 'Soho',
            link: '/district-lists'
          },
          {
            id: '28',
            name: 'Stanley',
            link: '/district-lists'
          },
          {
            id: '29',
            name: 'Tai Hang',
            link: '/district-lists'
          },
          {
            id: '30',
            name: 'Tai Tam',
            link: '/district-lists'
          },
          {
            id: '31',
            name: 'Tin Hau',
            link: '/district-lists'
          },
          {
            id: '32',
            name: 'Tsim Sha Tsui',
            link: '/district-lists'
          },
          {
            id: '33',
            name: 'Tung Chung',
            link: '/district-lists'
          },
          {
            id: '34',
            name: 'Wan chai',
            link: '/district-lists'
          }
        ]
      },
      { id: '4', name: 'Mortgage Calculator', link: '/calculator' },
      { id: '5', name: 'Sales Stamp Duty Calculator', link: '/calculator' },
      { id: '6', name: 'List Your Property', link: '/landlord-lists' }
    ]
  },
  {
    name: 'Rent',
    tabs: [
      { id: '1', name: 'Properties for Rent', link: '/' },
      { id: '2', name: 'Sole Agent Listings', link: '/dummylink' },
      { id: '3', name: 'Recently Rented', link: '/recently-sold' },
      {
        id: '4',
        name: 'District',
        subitems: [
          {
            id: '1',
            name: 'Aberdeen',
            link: '/district-lists'
          },
          {
            id: '2',
            name: 'Ap Lei Chau',
            link: '/district-lists'
          },
          {
            id: '3',
            name: 'Braemar Hill',
            link: '/district-lists'
          },
          {
            id: '4',
            name: 'Central',
            link: '/district-lists'
          },
          {
            id: '5',
            name: 'Cheung Sha',
            link: '/district-lists'
          },
          {
            id: '6',
            name: 'Chung Hom Kok',
            link: '/district-lists'
          },
          {
            id: '7',
            name: 'Clear Water Bay',
            link: '/district-lists'
          },
          {
            id: '8',
            name: 'Deep Water Bay',
            link: '/district-lists'
          },
          {
            id: '9',
            name: 'Discovery Bay',
            link: '/district-lists'
          },
          {
            id: '10',
            name: 'Happy Valley',
            link: '/district-lists'
          },
          {
            id: '11',
            name: "Jardine's Lookout",
            link: '/district-lists'
          },
          {
            id: '12',
            name: 'Kennedy Town',
            link: '/district-lists'
          },
          {
            id: '13',
            name: 'Mid Levels Central',
            link: '/district-lists'
          },
          {
            id: '14',
            name: 'Mid Levels East',
            link: '/district-lists'
          },
          {
            id: '15',
            name: 'Mid Levels West',
            link: '/district-lists'
          },
          {
            id: '16',
            name: 'North Point',
            link: '/district-lists'
          },
          {
            id: '17',
            name: 'Peak',
            link: '/district-lists'
          },
          {
            id: '18',
            name: 'Pok Fu Lam',
            link: '/district-lists'
          },
          {
            id: '19',
            name: 'Repulse Bay',
            link: '/district-lists'
          },
          {
            id: '20',
            name: 'Sai Kung',
            link: '/district-lists'
          },
          {
            id: '21',
            name: 'Sai Wan',
            link: '/district-lists'
          },
          {
            id: '22',
            name: 'Sai Ying Pun',
            link: '/district-lists'
          },
          {
            id: '23',
            name: 'Shau Kei Wan',
            link: '/district-lists'
          },
          {
            id: '24',
            name: 'Shek O',
            link: '/district-lists'
          },
          {
            id: '25',
            name: 'Sheung Wan',
            link: '/district-lists'
          },
          {
            id: '26',
            name: 'Shouson Hill',
            link: '/district-lists'
          },
          {
            id: '27',
            name: 'Soho',
            link: '/district-lists'
          },
          {
            id: '28',
            name: 'Stanley',
            link: '/district-lists'
          },
          {
            id: '29',
            name: 'Tai Hang',
            link: '/district-lists'
          },
          {
            id: '30',
            name: 'Tai Tam',
            link: '/district-lists'
          },
          {
            id: '31',
            name: 'Tin Hau',
            link: '/district-lists'
          },
          {
            id: '32',
            name: 'Tsim Sha Tsui',
            link: '/district-lists'
          },
          {
            id: '33',
            name: 'Tung Chung',
            link: '/district-lists'
          },
          {
            id: '34',
            name: 'Wan chai',
            link: '/district-lists'
          }
        ]
      },
      { id: '3', name: 'Rental Stamp Duty Calculator', link: '/dummylink' },
      { id: '3', name: 'List Your Property', link: '/dummylink' }
    ]
  },
  {
    name: 'Meet The team',
    tabs: [
      { id: '1', name: 'Team1', link: '/team1' },
      { id: '2', name: 'Team2', link: '/team2' }
    ]
  },
  {
    name: 'USEFUL INFO',
    tabs: [
      {
        id: '1',
        name: 'Living In Hong Kong',
        subitems: [
          {
            id: '1',
            name: 'Fast Facts',
            link: '/district-lists'
          },
          {
            id: '2',
            name: 'Schools',
            link: '/district-lists'
          },
          {
            id: '3',
            name: 'Tips to House Hunting',
            link: '/district-lists'
          },
          {
            id: '4',
            name: 'Culture and People',
            link: '/district-lists'
          },
          {
            id: '5',
            name: 'Travel',
            link: '/district-lists'
          },
          {
            id: '6',
            name: 'Climate',
            link: '/district-lists'
          },
          {
            id: '7',
            name: 'Directory',
            link: '/district-lists'
          },
          {
            id: '8',
            name: 'District',
            link: '/district-lists',
            subnestedItems: [
              {
                id: '1',
                name: 'Aberdeen',
                link: '/district-lists'
              },
              {
                id: '2',
                name: 'Ap Lei Chau',
                link: '/district-lists'
              },
              {
                id: '3',
                name: 'Braemar Hill',
                link: '/district-lists'
              },
              {
                id: '4',
                name: 'Central',
                link: '/district-lists'
              },
              {
                id: '5',
                name: 'Cheung Sha',
                link: '/district-lists'
              },
              {
                id: '6',
                name: 'Chung Hom Kok',
                link: '/district-lists'
              },
              {
                id: '7',
                name: 'Clear Water Bay',
                link: '/district-lists'
              },
              {
                id: '8',
                name: 'Deep Water Bay',
                link: '/district-lists'
              },
              {
                id: '9',
                name: 'Discovery Bay',
                link: '/district-lists'
              },
              {
                id: '10',
                name: 'Happy Valley',
                link: '/district-lists'
              },
              {
                id: '11',
                name: "Jardine's Lookout",
                link: '/district-lists'
              },
              {
                id: '12',
                name: 'Kennedy Town',
                link: '/district-lists'
              },
              {
                id: '13',
                name: 'Mid Levels Central',
                link: '/district-lists'
              },
              {
                id: '14',
                name: 'Mid Levels East',
                link: '/district-lists'
              },
              {
                id: '15',
                name: 'Mid Levels West',
                link: '/district-lists'
              },
              {
                id: '16',
                name: 'North Point',
                link: '/district-lists'
              },
              {
                id: '17',
                name: 'Peak',
                link: '/district-lists'
              },
              {
                id: '18',
                name: 'Pok Fu Lam',
                link: '/district-lists'
              },
              {
                id: '19',
                name: 'Repulse Bay',
                link: '/district-lists'
              },
              {
                id: '20',
                name: 'Sai Kung',
                link: '/district-lists'
              },
              {
                id: '21',
                name: 'Sai Wan',
                link: '/district-lists'
              },
              {
                id: '22',
                name: 'Sai Ying Pun',
                link: '/district-lists'
              },
              {
                id: '23',
                name: 'Shau Kei Wan',
                link: '/district-lists'
              },
              {
                id: '24',
                name: 'Shek O',
                link: '/district-lists'
              },
              {
                id: '25',
                name: 'Sheung Wan',
                link: '/district-lists'
              },
              {
                id: '26',
                name: 'Shouson Hill',
                link: '/district-lists'
              },
              {
                id: '27',
                name: 'Soho',
                link: '/district-lists'
              },
              {
                id: '28',
                name: 'Stanley',
                link: '/district-lists'
              },
              {
                id: '29',
                name: 'Tai Hang',
                link: '/district-lists'
              },
              {
                id: '30',
                name: 'Tai Tam',
                link: '/district-lists'
              },
              {
                id: '31',
                name: 'Tin Hau',
                link: '/district-lists'
              },
              {
                id: '32',
                name: 'Tsim Sha Tsui',
                link: '/district-lists'
              },
              {
                id: '33',
                name: 'Tung Chung',
                link: '/district-lists'
              },
              {
                id: '34',
                name: 'Wan chai',
                link: '/district-lists'
              }
            ]
          }
        ]
      },
      { id: '2', name: 'Rental Guide', link: '/dummylink' },
      { id: '3', name: 'Buying Guide', link: '/dummylink' },
      { id: '4', name: 'Tools and Resources', link: '/dummylink' }
    ]
  },
  {
    name: 'Blog',
    tabs: [{ id: '1', name: 'Video', link: '/dummylink' }]
  },
  {
    name: 'Services',
    tabs: [
      { id: '1', name: 'Design & Management', link: '/dummylink' },
      { id: '2', name: 'Relocation And Orientation', link: '/dummylink' },
      { id: '3', name: 'Home Staging', link: '/dummylink' },
      { id: '4', name: 'Renovation', link: '/dummylink' },
      { id: '5', name: 'Property Management', link: '/dummylink' }
    ]
  },
  {
    name: 'About US',
    tabs: [
      { id: '1', name: 'About Us', link: '/dummylink' },
      { id: '2', name: 'Contact Us', link: '/dummylink' },
      { id: '3', name: 'Career', link: '/dummylink' }
    ]
  }
]
export { Menu }
