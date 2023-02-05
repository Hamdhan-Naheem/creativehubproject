import React from 'react';
import Image from 'next/image';
import Styles from '@/component/LandingPage.module.css';
import { Menu, ArrowDownwardSharp } from '@material-ui/icons';

const landingPage = () => {
  return (
    <div className={Styles.main}>
      <div className={Styles.description}>
        <p>DIGITAL ARTIST</p>
      </div>
      <div className={Styles.header}>
        <div className={Styles.back}>BACK</div>
        <div className={Styles.heading}>BANKSY_IS_DEAD</div>
        <button className={Styles.icon}>
          <Menu />
        </button>
      </div>

      <div className={Styles.images}>
        <div className={Styles.image1}>
          <Image src="/img1.png" alt="image" width={280} height={350} />
          <div className={Styles.des}>
            id dignissim nulla tortor adipiscing tortor euismod.
          </div>
          <div className={Styles.price}>22,600</div>
        </div>

        <div className={Styles.image1}>
          <Image src="/img2.png" alt="image" width={280} height={150} />
          <div className={Styles.priceNdescription}>
            <div className={Styles.desc}>Ut enim donec gravida mollis</div>
            <div className={Styles.price}>7,850</div>
          </div>
        </div>

        <div className={Styles.image1}>
          <Image src="/img3.png" alt="image" width={180} height={350} />

          <div className={Styles.priceNdescription}>
            <div className={Styles.desc}>
              Tellus vel enim curabitur <div>neque amet amet </div>
            </div>
            <div className={Styles.price}>10,330</div>
          </div>
        </div>

        <div className={Styles.image1}>
          <Image src="/img6.png" alt="image" width={200} height={80} />

          <div className={Styles.priceNdescription}>
            <div className={Styles.desc}>Ut enim donec gravida</div>
            <div className={Styles.price}>2,150</div>
          </div>
        </div>

        <div className={Styles.image1}>
          <Image src="/img5.png" alt="image" width={180} height={300} />

          <div className={Styles.priceNdescription}>
            <div className={Styles.desc}>Et nulla et facilisi</div>
            <div className={Styles.price}>2,150</div>
          </div>
        </div>
      </div>

      <div className={Styles.conatiner2}>
        <div className={Styles.allText}>
          <div className={Styles.text}>CHILDREN OF</div>
          <div className={Styles.text2}>FORGOTTEN</div>
          <div className={Styles.text2}>GOD</div>
        </div>
        <div className={Styles.conatiner3}>
          <div className={Styles.container3Arr}>
            <div className={Styles.con3text}>EXPLORE MORE ARTWORKS</div>
            <div className={Styles.arrowIcon}>
              <ArrowDownwardSharp />
            </div>
          </div>
        </div>
        <div className={Styles.buttonBidding}>
          <div className={Styles.biddText}>START BIDDING</div>
        </div>
      </div>

      <div className={Styles.conatiner4}>
        <div className={Styles.con4Text1}>
          Pellentesque ut consectetur nulla
        </div>
        <p className={Styles.con4Text2}>
          Eget quis <span className={Styles.span1}>ultrices id</span>
        </p>
        <div className={Styles.con4Text3}>
          eu nec <span className={Styles.span2}>nulla.</span>
          <span className={Styles.span3}>Sometimes</span>
        </div>
      </div>

      <div className={Styles.imag}>
        <div>
          <Image src="/img6.png" alt="image" width={300} height={350} />
          <div className={Styles.des}>Ultrices fames neque pharetra</div>
          <div className={Styles.desc1}>Nulla faucibus</div>
        </div>

        <div>
          <Image src="/img7.png" alt="image" width={450} height={250} />
          <div className={Styles.des}>Ultrices fames neque pharetra</div>
          <div className={Styles.desc1}>Nulla faucibus</div>
        </div>

        <div>
          <Image src="/img8.png" alt="image" width={400} height={350} />
          <div className={Styles.des}>Ultrices fames neque pharetra</div>
          <div className={Styles.desc1}>Nulla faucibus</div>
        </div>
      </div>

      <div className={Styles.conatiner5}>
        <div className={Styles.allText}>
          <div className={Styles.text}>Odio morbi</div>
          <div className={Styles.text2}>Urna aliquam tinc</div>
          <div className={Styles.text3}>Aliquam pellentesque</div>
          <div className={Styles.para}>
            <p>
              Sed nunc nunc sagittis nulla varius. Vitae justo volutpat dolor
              ac. Elementum sed aliquet lorem sapien volutpat. In sed velit
              pretium sed. In quisque adipiscing congue faucibus. Enim orci
              feugiat mattis ultricies enim arcu cras mattis aliquet. Consequat
              amet amet mauris ac at est erat. Diam egestas volutpat purus
              accumsan nulla tellus faucibus. Viverra eleifend amet egestas
              tincidunt posuere
            </p>
          </div>
        </div>
        <Image src="/img9.png" alt="image" width={450} height={500} />
      </div>
    </div>
  );
};

export default landingPage;
