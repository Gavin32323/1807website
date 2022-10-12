import Header from '../../components/Header'
import HeaderImage from '../../images/teampicture.jpg'
import Card from "../../UI/Card"
import { plans } from '../../data'
import './sponsors.css'

const Sponsors = () => {
  return (
    <>
    <Header title="Sponsors" image={HeaderImage}>
      Learn more about our sponsors and how much you can sponsor us with
    </Header>
    <section className='sponsors'>
      <div className="container sponsors__container">
        {
          plans.map(({id, name, desc, price, features}) => {
            return <Card key={id} className='sponsor'>
              <h3>{name}</h3>
              <small>{desc}</small>
              <h1>{`$${price}`}</h1>
              <h4>Features</h4>
              {
                features.map(({feature,}, index) => {
                  return <p key={index}>{feature}</p>
                })
              }
            </Card>
          })
        }
      </div>
    </section>
    </>
  )
}

export default Sponsors