import { Box, HStack, SimpleGrid, Stack, useBreakpointValue } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { AudioControls, ITrack } from '../components/audioControls'
import { EpCard } from '../components/epCard'
import { DevfyLayout } from '../components/layout'
import { Navbar } from '../components/navbar'
import { SingerCard } from '../components/singerCard'
import { format } from 'date-fns'
import soHoje from './tmp/sohoje.mp3';
import porEnquanto from './tmp/porEnquanto.mp3';

const Tracks: ITrack[]  = [
  {
    title: "Só Hoje",
    image: "https://i.scdn.co/image/ab67616d0000b273f658b41765391ca2dd05d391",
    artist: "Jota Quest",
    audioSrc: soHoje,
    liked: false
  },
  {
    title: "Por enquanto (Ao vivo)",
    image: "https://www.capitalinicial.com.br/wp-content/uploads/2015/11/capa_multishow-ao-vivo-capital-inicial.jpg",
    artist: "Capital Inicial",
    audioSrc: porEnquanto,
    liked: false
  }
]

const Home: NextPage = () => {
  const qntd = useBreakpointValue({ base: 'small', md: 'all' })
  return (
    <DevfyLayout
      controls={<AudioControls tracks={Tracks}/>}
    >
      <Box w='85vw' bg='#121212' overflow='auto' pb='5'>
        <Navbar/>
        <Stack mt='5rem' px='10' spacing='1rem'>
          <h1 className='text-3xl font-bold text-white mb-5'>{ 
          Number(format(new Date(), 'k')) >= 1 && Number(format(new Date(), 'k')) <= 5 ? 'Boa Noite' : 
          Number(format(new Date(), 'k')) >= 6 && Number(format(new Date(), 'k')) <= 11 ? 'Bom Dia' :
          Number(format(new Date(), 'k')) >= 12 && Number(format(new Date(), 'k')) <= 18 ? 'Boa Tarde' :
          Number(format(new Date(), 'k')) >= 19 && Number(format(new Date(), 'k')) <= 24 ? 'Boa Noite' :
          ''
          }</h1>
          { qntd === 'small' ? (
            <>
              <HStack spacing='1rem'>
                <SingerCard/>
              </HStack>
              <HStack spacing='1rem'>
                <SingerCard/>
              </HStack>
            </>
          ) : (
            <>
              <HStack spacing='1rem'>
                <SingerCard/>
                <SingerCard/>
                <SingerCard/>
                <SingerCard/>
              </HStack>
              <HStack spacing='1rem'>
                <SingerCard/>
                <SingerCard/>
                <SingerCard/>
                <SingerCard/>
              </HStack>
            </>
          ) }
        </Stack>
        <Stack mt='3rem' px='10' spacing='1rem'>
          <div className='flex items-center justify-between'>
            <h1 className={`${qntd === 'small' ? 'text-xl' : 'text-2xl'} font-bold text-white mb-2`}>Programa que eu te escuto</h1>
            <a className="text-xs text-sp-gray-1 font-semibold hover:underline" href={`/genre/section${Math.random()}`}>VER TUDO</a>
          </div>
          <SimpleGrid columns={[1, 1, 2, 3, 4, 7]} spacing='1.5rem'>
            <EpCard
              imageUrl='https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
              title='Codando em Londres'
              description='25 DE DEZ.'
            />
            <EpCard
              imageUrl='https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
              title='O que é metaverso?'
              description='25 DE DEZ.'
            />
            <EpCard
              imageUrl='https://images.unsplash.com/photo-1580894742597-87bc8789db3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
              title='Mulheres na tecnologia'
              description='25 DE DEZ.'
            />
            <EpCard
              imageUrl='https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2669&q=80'
              title='HTML é uma linguagem de programação?'
              description='25 DE DEZ.'
            />
            <EpCard
              imageUrl='https://images.unsplash.com/flagged/photo-1579274216947-86eaa4b00475?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80'
              title='Redes de computadores'
              description='25 DE DEZ.'
            />
            <EpCard
              imageUrl='https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80'
              title='Apple Day'
              description='25 DE DEZ.'
            />
            <EpCard
              imageUrl='https://images.unsplash.com/photo-1551817958-d9d86fb29431?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'
              title='Mineração de texto no Twitter'
              description='25 DE DEZ.'
            />
          </SimpleGrid>

          <div className='flex items-center justify-between'>
            <h1 className={`${qntd === 'small' ? 'text-xl' : 'text-2xl'} font-bold text-white mb-2 mt-4`}>Suas músicas estão com saudades</h1>
            <a className="text-xs text-sp-gray-1 font-semibold hover:underline mt-4" href={`/genre/section${Math.random()}`}>VER TUDO</a>
          </div>
          <SimpleGrid columns={[1, 1, 2, 3, 4, 7]} spacing='1.5rem'>
            <EpCard
              imageUrl='https://m.media-amazon.com/images/I/91ym3sMcvRL._AC_SL1500_.jpg'
              title='Rubber Soul (Remastered)'
              description='The Beatles'
            />
            <EpCard
              imageUrl='https://giradiscosme.files.wordpress.com/2019/09/abbey-lp.jpg'
              title='Abbey Road'
              description='The Beatles'
            />
            <EpCard
              imageUrl='https://i.scdn.co/image/ab67616d0000b2732cb88e469325ed1599545203'
              title='Jota Quest Quinze'
              description='Jota Quest'
            />
            <EpCard
              imageUrl='https://pbs.twimg.com/profile_images/1237952538747510784/chyuEjp5_400x400.jpg'
              title='Frejat'
              description=''
              isSinger
            />
            <EpCard
              imageUrl='https://img.discogs.com/PMacd2ZWb-G5Ycg8Vi5ZzAX8QOE=/fit-in/589x532/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-13166368-1601170906-2792.jpeg.jpg'
              title='Os Três Primeiros (Gravado Ao Vivo no Circo Voador)'
              description='Skank'
            />
            <EpCard
              imageUrl='https://img.discogs.com/e9Ar7c8Y14d3v0HggKUVcWRJRU8=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-3775247-1343929260-4654.jpeg.jpg'
              title='Acústico Mtv'
              description='Ultraje a Rigor'
            />
            <EpCard 
              imageUrl='https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Los_Beatles_%2819266969775%29_Recortado.jpg/250px-Los_Beatles_%2819266969775%29_Recortado.jpg'
              title='The Beatles'
              description=''
              isSinger
            />
          </SimpleGrid>
        </Stack>
      </Box>
    </DevfyLayout>
  )
}

export default Home
