import HeaderResponsive from './header'
import Footer from './footer'
import HeaderMenu from '@/data/menu.json'
import FooterMenu from '@/data/footer.json'
import { Container } from '@mantine/core'

export default function Layout({children}){
  return (
    <>
      <HeaderResponsive links={HeaderMenu.links} />
        <Container>
          {children}
        </Container>
      <Footer data={FooterMenu.data}/>
    </>
  )
}