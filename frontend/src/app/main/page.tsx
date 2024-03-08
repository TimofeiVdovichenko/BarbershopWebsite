import Image from "next/image";
import styles from "./page.module.css";
import Container from "@/components/std/Container";
import ballon from "./ballon.png"
import cream from "./cream.png"
import tools from "./tools.png"
import mustache from "./mustache.png"


export default function Home() {
  return (
    <main>
      <div className={styles.main}>
      <Container>
        <div className={styles.name}>
          <h1 className={styles.title}>Лысый Bebrik</h1>
          <h4 className={styles.subtitle}>Barbershop</h4>
        </div>
      </Container>
      </div>

      <div className={styles.about}>
        <Container>
          <div className={styles.description}>
            <Image src={ballon} alt="ballon" width={109} height={382} />
            <div className={styles.details}>
              <Image src={mustache} alt="ballon" width={362} height={100} />
              <h2 className={styles.details_title}>Парикмахерские клубы</h2>
              <h5 className={styles.details_description}>Большие города навязывают свой ритм и стиль.
                Мы - барбершопы, свободные от предрассудков.
                Это то место, где вы мы можете отдохнуть от динамики и условностей.
                У нас Вы гарантировано получите высокий сервис за отличную цену. </h5>
              <a href="http://localhost:3000/login">
              <button className={styles.record}>
                <h5>Запишись сейчас</h5>
              </button>
              </a>
            </div>
            <Image src={cream} alt="ballon" width={159} height={382} />
          </div>
        </Container>
      </div>

      <div className={styles.schedule}>
        <Container>
          <div className={styles.days}>
            <div className={styles.mon}>
              <div className={styles.circle}>
                <h2 className={styles.day}>ПН</h2>
                <h5 className={styles.time}>09:00-20:00</h5>
              </div>
            </div>
            <div className={styles.tue}>
              <div className={styles.circle}>
                <h2 className={styles.day}>ВТ</h2>
                <h5 className={styles.time}>09:00-20:00</h5>
              </div>
            </div>
            <div className={styles.wed}>
              <div className={styles.circle}>
                <h2 className={styles.day}>СР</h2>
                <h5 className={styles.time}>09:00-20:00</h5>
              </div>
            </div>
            <div className={styles.thu}>
              <div className={styles.circle}>
                <h2 className={styles.day}>ЧТ</h2>
                <h5 className={styles.time}>09:00-20:00</h5>
              </div>
            </div>
            <div className={styles.fri}>
              <div className={styles.circle}>
                <h2 className={styles.day}>ПТ</h2>
                <h5 className={styles.time}>09:00-19:00</h5>
              </div>
            </div>
            <div className={styles.sat}>
              <div className={styles.circle_off}>
                <h2 className={styles.day}>СБ</h2>
                <h5 className={styles.time}>Выходной</h5>
              </div>
            </div>
            <div className={styles.sun}>
              <div className={styles.circle_off}>
                <h2 className={styles.day}>ВС</h2>
                <h5 className={styles.time}>Выходной</h5>
              </div>
            </div>
          </div>
        </Container>  
      </div>


      <div className={styles.service}>
        <Container>
          <div className={styles.service_all}>
            <div className={styles.services}>
              <h2>Услуги:</h2>
              <div className={styles.hairdressing}>
                <h3>Парикмахерство</h3>
                <h5 className={styles.other}>Машинка для стрижки или ножницы для мужчин, женщин и детей</h5>
              </div>
              <div className={styles.shaving}>
                <h3>Бритье</h3>
                <h5 className={styles.other}>Полное или традиционное краниальное бритье</h5>
              </div>
              <div className={styles.beard}>
                <h3>Борода</h3>
                <h5 className={styles.other}>Градиентная борода с клипером, контур бороды или срезанная борода</h5>
              </div>
              <div className={styles.mustache}>
                <h3>Усы</h3>
                <h5 className={styles.other}>Резка и скульптура</h5>
              </div>
              <a href="http://localhost:3000/login">
                <button className={styles.record_reception}>
                  <h5>Записаться на прием</h5>
                </button>
                </a>
            </div>
            <Image src={tools} alt="tools" width={564} height={535} />
          </div>
          
        </Container>
      </div>


      <div className={styles.paralax}></div>

      <div className={styles.price}>
        <Container>
          <h2 className={styles.look_price}>Посмотрите наши цены</h2>
          
          <div className={styles.service_top}>
            <div className={styles.breard_trim}>
              <h3 className={styles.price_title}>Цены на стрижку бороды</h3>
              <div className={styles.name_price}>
                <h5>Бритье королевское (лицо и голова)</h5>
                <h5 className={styles.price_service}>1500</h5>
              </div>
              <div className={styles.name_price}>
                <h5>Коррекция бороды с подбриванием</h5>
                <h5 className={styles.price_service}>1000</h5>
              </div>
              <div className={styles.name_price}>
                <h5>Коррекция бороды</h5>
                <h5>700</h5>
              </div>
            </div>
            <div className={styles.basic_service}>
              <h3>Основные услуги</h3>
              <div className={styles.name_price}>
                <h5>Стрижка мужская</h5>
                <h5>1500</h5>
              </div>
              <div className={styles.name_price}>
                <h5>Стрижка детская</h5>
                <h5>1000</h5>
              </div>
              <div className={styles.name_price}>
                <h5>Стрижка под машинку (несколько насадок)</h5>
                <h5 className={styles.price_service}>1000</h5>
              </div>
              <div className={styles.name_price}>
                <h5>Стрижка под машинку (одна насадока)</h5>
                <h5>600</h5>
              </div>
            </div>
          </div>
          
          <div className={styles.service_bottom}>
            <div className={styles.mustache_trim}>
              <h3>Цены на стрижку усов</h3>
              <div className={styles.name_price}>
                <h5>Стрижка усов</h5>
                <h5>500</h5>
              </div>
              <div className={styles.name_price}>
                <h5>Моделирование усов</h5>
                <h5>600</h5>
              </div>
            </div>

            <div className={styles.additional_service}>
              <h3>Дополнительные услуги</h3>
              <div className={styles.name_price}>
                <h5>Камуфляж седены (волосы)</h5>
                <h5>1000</h5>
              </div>
              <div className={styles.name_price}>
                <h5>Камуфляж седены (борода)</h5>
                <h5>800</h5>
              </div>
              <div className={styles.name_price}>
                <h5>Мытье и укладка</h5>
                <h5>500</h5>
              </div>
            </div>
          </div>
          
        </Container>
      </div>
    </main>
  );
}
