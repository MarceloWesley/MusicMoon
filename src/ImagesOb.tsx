import EletricGuitar1 from './assets/Eletric-guitar1.jpg'
import EletricGuitar2 from './assets/Eletric-guitar2.jpg'
import EletricGuitar3 from './assets/Eletric-guitar3.jpg'
import EletricGuitar4 from './assets/Eletric-guitar4.jpg'
import EletricGuitar5 from './assets/Eletric-guitar5.jpg'
import EletricGuitar6 from './assets/Eletric-guitar6.jpg'



export interface ImagesFormattedProps {
  id: number
  image: string
}




    export const ImagesFormatted: ImagesFormattedProps[] = [
        {
        id: 1 ,
        image: EletricGuitar1
        },
        {
          id: 2,
          image: EletricGuitar2
        },
        {
          id: 3,
          image: EletricGuitar3
        },
        {
          id: 4,
          image: EletricGuitar4
        },
        {
          id: 5,
          image: EletricGuitar5
        },
        {
          id: 6,
          image: EletricGuitar6
        }
    ];

  