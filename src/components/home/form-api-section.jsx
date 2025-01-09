import lightningIcon from "../../assets/lightning_icon.svg";
import formIcon from "../../assets/formcarry_form_icon.svg";
import "./formApiSection.css";
import iconOfSociety from "../../assets/formcarry_logo.svg"


function FormApiSection() {
  return (
    <>
      <section>
        <div className="form-api-section">
          <p className="title">FORM API</p>
          <div className="title-container">
            <h1 className="subtitle-box">
              <div className="subtitle">
                Receive emails
                <img src={lightningIcon} alt="Icône d'éclair" className="icon" />
                instantly
              </div>
              <div className="subtitle">
                from your website
                <img src={formIcon} alt="Icône de formulaire" className="icon" />
                form
              </div>
            </h1>
          </div>
          <p className="description">
            Never worry about the backend of your form again. Create your HTML form,
            <br />
            connect to our API, get email notifications, block spam, and use
            <br />
            over 3000 integrations.
          </p>
          <div className="form-container">
            <div className="input-animation" style={{opacity:"1", transform:"none"}}>
              <form action="https://app.formcarry.com/register" method="GET">
                <div className="form-box">
                  <svg className="input-hover" width="456" height="109" viewBox="0 0 456 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.43237 15.6418L8.43368 15.6329C9.13435 10.8624 11.6904 6.56142 15.5459 3.66587C19.4004 0.77108 24.2419 -0.484754 29.0174 0.171545C161.062 18.2015 294.944 18.2017 426.988 0.172129C431.765 -0.488186 436.609 0.767202 440.464 3.66448C444.32 6.56264 446.874 10.8684 447.567 15.642L447.569 15.6507L455.81 72.9492C456.155 75.3147 456.029 77.7252 455.439 80.0419C454.85 82.3586 453.807 84.5357 452.373 86.4479C450.938 88.3601 449.139 89.9697 447.08 91.1839C445.02 92.3981 442.741 93.1929 440.374 93.5225L440.361 93.5243C299.448 112.831 156.562 112.831 15.6493 93.5243L15.6414 93.5232C13.2722 93.1954 10.9914 92.4019 8.9304 91.1885C6.86936 89.9751 5.06885 88.3658 3.6326 86.4534C2.19635 84.541 1.15274 82.3632 0.561897 80.0457C-0.0284018 77.7303 -0.155133 75.321 0.188963 72.9565C0.189283 72.9543 0.189603 72.9521 0.189923 72.9499L8.43237 15.6418Z" fill="url(#paint0_linear_1537_11426)"></path>
                  <defs><linearGradient id="paint0_linear_1537_11426" x1="228" y1="0" x2="228" y2="75.3793" gradientUnits="userSpaceOnUse"><stop stop-color="#F0F1FF"></stop><stop offset="1" stop-color="#F0F1FF" stop-opacity="0"></stop></linearGradient></defs></svg>
                  <svg className="input-bg" width="445" height="97" viewBox="0 0 445 97" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.3651 11.5007C9.83594 8.29498 11.5535 5.40494 14.1441 3.45936C16.7347 1.51379 19.9887 0.670093 23.1982 1.11185C155.784 19.216 290.216 19.216 422.802 1.11185C426.011 0.6675 429.265 1.51042 431.855 3.4567C434.444 5.40298 436.159 8.29462 436.625 11.5007L444.868 68.812C445.099 70.3946 445.015 72.0073 444.62 73.5572C444.225 75.1071 443.528 76.5636 442.568 77.8429C441.608 79.1222 440.405 80.199 439.028 81.0112C437.65 81.8235 436.125 82.3551 434.541 82.5756C294.169 101.808 151.831 101.808 11.4589 82.5756C9.87405 82.3563 8.34829 81.8255 6.96952 81.0138C5.59076 80.2021 4.38624 79.1255 3.42538 77.8461C2.46453 76.5667 1.76634 75.1098 1.37104 73.5592C0.975749 72.0087 0.891171 70.3953 1.12218 68.812L9.3651 11.5007Z" fill="white" stroke="#333FFF"></path></svg>
                  <svg className="emailIcon" width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.17007 5.08248L22.0241 7.17008C22.243 7.20084 22.4406 7.31728 22.5736 7.49379C22.7067 7.6703 22.7641 7.89242 22.7333 8.11128L20.8777 21.3149C20.8469 21.5337 20.7305 21.7314 20.554 21.8644C20.3775 21.9974 20.1554 22.0549 19.9365 22.0241L5.08248 19.9365C4.86361 19.9057 4.66593 19.7893 4.53292 19.6128C4.39991 19.4363 4.34247 19.2142 4.37323 18.9953L6.22887 5.79173C6.25963 5.57287 6.37607 5.37519 6.55258 5.24218C6.72909 5.10917 6.95121 5.05173 7.17007 5.08248V5.08248ZM13.6396 13.2987L8.97973 8.06167L7.73431 9.16912L13.3448 15.4738L20.3616 10.9396L19.4577 9.5393L13.6404 13.2988L13.6396 13.2987Z" fill="#B3B8D0"></path></svg>
                  <div><svg className="inputCurve" width="217" height="12" viewBox="0 0 217 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path id="curve" d="M1 0.5C35.1667 5.16667 126 14 216 10.5" stroke="white" fill="white"></path><text x="0"><textPath fill="#B3B8D0" xlinkHref="#curve">Your email address</textPath><textPath xlinkHref="#curve"><a className="blinker">|</a></textPath></text></svg></div><svg className="submitButton" width="137" height="68" viewBox="0 0 137 68" fill="none" xmlns="http://www.w3.org/2000/svg"><path className="buttonBg" d="M128.82 4.83682C128.507 2.66273 126.499 1.14832 124.322 1.4379C86.7692 6.4322 49.0939 9.97774 11.2959 12.0745C9.38473 12.1805 7.81325 13.6216 7.5475 15.5172L0.919677 62.7932C0.571779 65.2747 2.56518 67.4617 5.06786 67.3366C47.5125 65.2148 89.8474 61.3479 132.073 55.736C134.275 55.4432 135.812 53.4068 135.495 51.2074L128.82 4.83682Z" fill="#1463FF"></path><path d="M36.4492 43.4455C35.5346 43.5256 34.7121 43.3846 33.9818 43.0226C33.2514 42.6607 32.6592 42.1086 32.205 41.3665C31.7505 40.6211 31.4765 39.7135 31.3829 38.6437C31.3121 37.8348 31.3625 37.0984 31.5339 36.4346C31.7087 35.7706 31.9829 35.1959 32.3563 34.7108C32.7294 34.2223 33.1846 33.8348 33.7218 33.5483C34.2587 33.2584 34.8541 33.0849 35.5078 33.0277C36.0559 32.9798 36.5764 33.0157 37.0693 33.1356C37.5655 33.2553 38.0165 33.447 38.4222 33.711C38.8276 33.9716 39.1721 34.2958 39.4555 34.6836C39.7423 35.071 39.9502 35.5086 40.0794 35.9964L38.5094 36.1338C38.394 35.8411 38.2433 35.5831 38.0574 35.3598C37.8712 35.1333 37.6536 34.946 37.4044 34.7981C37.1583 34.6467 36.8877 34.5389 36.5926 34.4749C36.2976 34.4109 35.9817 34.3936 35.6449 34.4231C35.0704 34.4733 34.5632 34.6658 34.1233 35.0004C33.6835 35.3349 33.3514 35.7982 33.127 36.3901C32.9057 36.9784 32.8308 37.6819 32.9025 38.5008C32.9744 39.3229 33.1689 40.0062 33.4861 40.5507C33.8032 41.0952 34.2074 41.4941 34.6986 41.7472C35.1899 42.0003 35.7327 42.1009 36.327 42.0489C36.8949 41.9992 37.3798 41.837 37.7816 41.5623C38.1834 41.2876 38.4816 40.9305 38.676 40.4909C38.8738 40.0511 38.9489 39.5604 38.9016 39.0189L39.1542 39.1116L36.3262 39.359L36.2157 38.0961L40.3017 37.7386L40.7558 42.929L39.5771 43.0322L39.3322 41.8309L39.2827 41.8352C38.9474 42.3004 38.554 42.6708 38.1023 42.9466C37.654 43.222 37.103 43.3884 36.4492 43.4455ZM45.4937 42.6692C44.7442 42.7348 44.0847 42.6311 43.5152 42.3582C42.9487 42.0817 42.493 41.6642 42.148 41.1054C41.806 40.5431 41.6005 39.8674 41.5315 39.0783C41.4633 38.2991 41.5485 37.5996 41.787 36.9799C42.0289 36.3598 42.3977 35.8601 42.8935 35.4807C43.3927 35.101 43.9955 34.8803 44.7021 34.8184C45.1313 34.7809 45.5535 34.8155 45.9688 34.9222C46.384 35.0289 46.7651 35.2202 47.1119 35.4959C47.4588 35.7717 47.7459 36.1441 47.9732 36.6133C48.2003 37.0792 48.344 37.6572 48.4044 38.3473L48.4503 38.8722L42.4031 39.4013L42.3061 38.2919L46.9021 37.8898C46.8681 37.5002 46.7586 37.1621 46.5739 36.8755C46.3888 36.5856 46.145 36.3657 45.8424 36.2158C45.5432 36.0657 45.202 36.0074 44.819 36.0409C44.403 36.0773 44.0487 36.2114 43.7563 36.4433C43.4668 36.6715 43.2522 36.9565 43.1124 37.2981C42.9757 37.6361 42.9239 37.995 42.9571 38.3747L43.0329 39.2414C43.0774 39.7499 43.2044 40.1746 43.4139 40.5156C43.6267 40.8563 43.9031 41.1066 44.2431 41.2665C44.5829 41.4231 44.969 41.4825 45.4016 41.4446C45.6822 41.4201 45.9346 41.3581 46.1588 41.2586C46.3827 41.1558 46.5718 41.0162 46.726 40.8397C46.8803 40.6631 46.9916 40.4521 47.0599 40.2066L48.4836 40.3366C48.4075 40.7591 48.2377 41.1383 47.9743 41.4741C47.7139 41.8062 47.3733 42.0773 46.9525 42.2871C46.5347 42.4933 46.0484 42.6207 45.4937 42.6692ZM52.9937 34.1928L53.0977 35.3815L48.9424 35.745L48.8385 34.5564L52.9937 34.1928ZM49.7933 32.6363L51.2742 32.5067L51.9038 39.703C51.9289 39.9902 51.9908 40.2027 52.0893 40.3405C52.1876 40.475 52.3067 40.5627 52.4467 40.6037C52.5897 40.6411 52.7421 40.6527 52.9039 40.6385C53.0228 40.6281 53.1261 40.6108 53.2138 40.5865C53.3015 40.5622 53.3696 40.5429 53.4183 40.5286L53.7928 41.7286C53.7098 41.7691 53.5905 41.8128 53.4349 41.8597C53.2796 41.9099 53.0833 41.947 52.8458 41.9711C52.4568 42.0118 52.0875 41.9742 51.738 41.8584C51.3885 41.7426 51.0965 41.5419 50.8619 41.2564C50.6273 40.9708 50.49 40.5985 50.4498 40.1396L49.7933 32.6363ZM63.4272 33.4098C63.3334 32.9455 63.0837 32.6014 62.6781 32.3774C62.2723 32.15 61.7788 32.0618 61.1977 32.1126C60.7817 32.149 60.4276 32.2466 60.1354 32.4052C59.8429 32.5605 59.6224 32.7595 59.4739 33.0021C59.3285 33.241 59.2683 33.5041 59.2935 33.7914C59.3146 34.0324 59.3889 34.2355 59.5165 34.4007C59.6473 34.5656 59.8104 34.6994 60.0057 34.802C60.204 34.9011 60.414 34.9809 60.6355 35.0414C60.8568 35.0986 61.0686 35.1432 61.2711 35.1754L62.2841 35.3463C62.6146 35.3972 62.9558 35.4755 63.3078 35.5811C63.6597 35.6868 63.9906 35.8375 64.3005 36.0333C64.6104 36.2291 64.8688 36.4826 65.0757 36.7939C65.2859 37.1049 65.411 37.4882 65.4508 37.9438C65.5011 38.5183 65.3971 39.0415 65.139 39.5132C64.8841 39.9847 64.4873 40.3737 63.9485 40.6803C63.4131 40.9867 62.7491 41.1745 61.9567 41.2439C61.1973 41.3103 60.5297 41.2473 59.9539 41.0548C59.3781 40.8623 58.914 40.5585 58.5616 40.1435C58.209 39.7252 57.9894 39.2121 57.9029 38.6042L59.4383 38.4699C59.5001 38.8338 59.6456 39.1288 59.875 39.3549C60.1074 39.5774 60.3923 39.7339 60.7295 39.8241C61.0698 39.9108 61.4364 39.9369 61.8293 39.9026C62.2619 39.8647 62.6406 39.7634 62.9656 39.5985C63.2935 39.4301 63.5442 39.2152 63.7176 38.9538C63.8908 38.6892 63.9629 38.3917 63.934 38.0616C63.9077 37.7611 63.8004 37.5226 63.6119 37.3461C63.4268 37.1694 63.1834 37.031 62.8819 36.9309C62.5837 36.8306 62.2488 36.7484 61.8772 36.6844L60.65 36.4624C59.8184 36.3123 59.1461 36.0434 58.6331 35.6557C58.1234 35.2678 57.8377 34.7206 57.7758 34.014C57.7247 33.4296 57.8386 32.9056 58.1174 32.442C58.3962 31.9784 58.7959 31.6025 59.3163 31.3141C59.8364 31.0224 60.4365 30.8467 61.1167 30.7872C61.8035 30.7272 62.4199 30.7947 62.966 30.9898C63.5153 31.1846 63.9604 31.48 64.3011 31.8761C64.6416 32.2688 64.8422 32.737 64.9031 33.2806L63.4272 33.4098ZM70.0126 32.7039L70.1166 33.8925L65.9613 34.256L65.8573 33.0674L70.0126 32.7039ZM66.8122 31.1473L68.293 31.0178L68.9226 38.214C68.9477 38.5013 69.0096 38.7138 69.1081 38.8515C69.2064 38.986 69.3255 39.0737 69.4655 39.1147C69.6085 39.1521 69.7609 39.1637 69.9227 39.1496C70.0416 39.1392 70.1449 39.1218 70.2326 39.0975C70.3203 39.0732 70.3885 39.0539 70.4371 39.0397L70.8116 40.2396C70.7286 40.2801 70.6094 40.3238 70.4538 40.3707C70.2984 40.4209 70.1021 40.4581 69.8646 40.4822C69.4756 40.5228 69.1063 40.4853 68.7568 40.3695C68.4074 40.2537 68.1153 40.053 67.8807 39.7674C67.6461 39.4818 67.5088 39.1096 67.4686 38.6506L66.8122 31.1473ZM74.2659 40.167C73.7838 40.2091 73.3402 40.1581 72.9349 40.0139C72.5295 39.8664 72.1978 39.6309 71.9399 39.3075C71.6853 38.9837 71.5362 38.5726 71.4926 38.074C71.4551 37.6448 71.5067 37.2843 71.6475 36.9925C71.7884 36.7007 71.992 36.4616 72.2585 36.2753C72.525 36.0889 72.828 35.9393 73.1675 35.8264C73.5069 35.7136 73.8547 35.6199 74.2109 35.5455C74.6619 35.4528 75.0279 35.3775 75.309 35.3197C75.5898 35.2585 75.7911 35.1827 75.9129 35.0922C76.0348 35.0017 76.0879 34.8673 76.0723 34.689L76.0692 34.6543C76.0314 34.2218 75.8799 33.8973 75.6148 33.681C75.353 33.4643 74.9827 33.3769 74.5039 33.4188C74.0053 33.4625 73.6221 33.6074 73.3542 33.8538C73.0893 34.0965 72.9141 34.3564 72.8285 34.6334L71.4091 34.4382C71.5337 33.9615 71.7421 33.5673 72.0343 33.2556C72.3294 32.9403 72.6793 32.7001 73.0841 32.535C73.4886 32.3665 73.9203 32.2622 74.3792 32.222C74.683 32.1954 75.0081 32.2036 75.3545 32.2465C75.704 32.2858 76.0355 32.3865 76.3492 32.5487C76.6661 32.7106 76.9356 32.9582 77.1577 33.2915C77.3796 33.6214 77.5147 34.0637 77.5633 34.6184L78.0052 39.6701L76.5591 39.7967L76.4681 38.7566L76.4086 38.7618C76.3296 38.9617 76.2025 39.1624 76.0272 39.3641C75.8518 39.5657 75.6193 39.7408 75.3295 39.8893C75.0397 40.0377 74.6852 40.1303 74.2659 40.167ZM74.4838 38.9502C74.8932 38.9143 75.2361 38.8028 75.5125 38.6156C75.7922 38.4281 75.9966 38.1973 76.1257 37.9232C76.2577 37.6455 76.3106 37.3564 76.2843 37.0559L76.1986 36.0753C76.1503 36.1327 76.0523 36.1912 75.9045 36.2507C75.7597 36.3066 75.5929 36.3595 75.4043 36.4093C75.2154 36.4557 75.0313 36.5001 74.852 36.5424C74.6725 36.5814 74.5223 36.6145 74.4016 36.6417C74.1175 36.7032 73.8604 36.7872 73.6302 36.8939C73.4032 37.0002 73.2259 37.1405 73.098 37.3147C72.9732 37.4853 72.9224 37.7027 72.9455 37.9668C72.9776 38.3333 73.1372 38.5989 73.4244 38.7634C73.7113 38.9246 74.0645 38.9868 74.4838 38.9502ZM79.6987 39.522L79.0332 31.9147L80.4645 31.7894L80.5702 32.9979L80.6495 32.991C80.7523 32.5694 80.9685 32.2261 81.298 31.9611C81.6271 31.6927 82.0163 31.5389 82.4653 31.4996C82.6733 31.4814 82.862 31.4899 83.0315 31.5249C83.2009 31.56 83.3521 31.615 83.4851 31.6899L83.1179 32.9696C83.025 32.9345 82.9213 32.9086 82.8067 32.8921C82.6919 32.8722 82.5618 32.8686 82.4165 32.8813C82.0731 32.9113 81.7726 33.0125 81.5148 33.1847C81.2601 33.3534 81.0647 33.5735 80.9288 33.8449C80.7961 34.116 80.7442 34.4166 80.7731 34.7468L81.1796 39.3924L79.6987 39.522ZM88.2844 31.1053L88.3884 32.2939L84.2331 32.6575L84.1291 31.4688L88.2844 31.1053ZM85.084 29.5487L86.5649 29.4192L87.1944 36.6154C87.2196 36.9027 87.2814 37.1152 87.38 37.253C87.4782 37.3874 87.5974 37.4752 87.7374 37.5161C87.8804 37.5535 88.0328 37.5651 88.1946 37.551C88.3134 37.5406 88.4167 37.5232 88.5044 37.4989C88.5921 37.4746 88.6603 37.4554 88.709 37.4411L89.0834 38.641C89.0005 38.6816 88.8812 38.7253 88.7256 38.7721C88.5703 38.8223 88.3739 38.8595 88.1365 38.8836C87.7474 38.9243 87.3782 38.8867 87.0287 38.7709C86.6792 38.6551 86.3872 38.4544 86.1526 38.1688C85.918 37.8833 85.7806 37.511 85.7405 37.052L85.084 29.5487ZM93.5195 38.4675C92.77 38.5331 92.1105 38.4294 91.541 38.1565C90.9745 37.88 90.5187 37.4624 90.1737 36.9037C89.8318 36.3414 89.6263 35.6657 89.5572 34.8766C89.4891 34.0974 89.5742 33.3979 89.8128 32.7782C90.0547 32.1581 90.4235 31.6584 90.9193 31.279C91.4184 30.8993 92.0213 30.6785 92.7278 30.6167C93.1571 30.5792 93.5793 30.6138 93.9946 30.7205C94.4098 30.8272 94.7908 31.0185 95.1377 31.2942C95.4845 31.57 95.7716 31.9424 95.999 32.4116C96.2261 32.8775 96.3698 33.4555 96.4302 34.1455L96.4761 34.6705L90.4289 35.1996L90.3318 34.0902L94.9279 33.6881C94.8938 33.2985 94.7844 32.9604 94.5996 32.6738C94.4146 32.3839 94.1707 32.164 93.8682 32.0141C93.5689 31.864 93.2278 31.8057 92.8448 31.8392C92.4288 31.8756 92.0745 32.0097 91.7821 32.2416C91.4926 32.4698 91.278 32.7548 91.1382 33.0964C91.0014 33.4344 90.9496 33.7933 90.9829 34.173L91.0587 35.0397C91.1032 35.5482 91.2302 35.9729 91.4397 36.3139C91.6524 36.6546 91.9289 36.9049 92.2689 37.0648C92.6087 37.2214 92.9948 37.2807 93.4273 37.2429C93.708 37.2184 93.9604 37.1563 94.1846 37.0569C94.4085 36.9541 94.5976 36.8145 94.7518 36.638C94.906 36.4614 95.0173 36.2504 95.0857 36.0049L96.5094 36.1348C96.4332 36.5574 96.2635 36.9366 96.0001 37.2723C95.7397 37.6045 95.3991 37.8755 94.9783 38.0854C94.5605 38.2916 94.0742 38.419 93.5195 38.4675ZM100.995 37.8085C100.381 37.8623 99.8188 37.7534 99.3093 37.4819C98.8028 37.2068 98.387 36.789 98.0618 36.2286C97.7397 35.6646 97.5426 34.9715 97.4707 34.1493C97.3988 33.3272 97.4743 32.6119 97.6972 32.0035C97.9234 31.3948 98.264 30.9142 98.7189 30.5617C99.1738 30.2091 99.7066 30.0062 100.317 29.9527C100.79 29.9114 101.176 29.9574 101.477 30.0908C101.782 30.2205 102.022 30.3825 102.199 30.5767C102.379 30.7705 102.52 30.9428 102.623 31.0935L102.712 31.0857L102.383 27.3167L103.863 27.1871L104.751 37.3302L103.305 37.4567L103.201 36.273L103.077 36.2839C103.002 36.4535 102.89 36.6496 102.739 36.8724C102.593 37.0948 102.381 37.2963 102.104 37.477C101.827 37.6576 101.457 37.7681 100.995 37.8085ZM101.211 36.517C101.637 36.4797 101.987 36.336 102.261 36.0858C102.539 35.8319 102.736 35.497 102.852 35.0809C102.972 34.6645 103.009 34.1888 102.962 33.6539C102.916 33.1257 102.799 32.67 102.613 32.2871C102.426 31.9042 102.176 31.615 101.863 31.4195C101.55 31.224 101.177 31.1451 100.744 31.183C100.299 31.222 99.9374 31.37 99.6605 31.6271C99.3835 31.8843 99.1866 32.2192 99.0697 32.632C98.956 33.0445 98.9212 33.5017 98.9651 34.0036C99.0096 34.5121 99.1255 34.9627 99.3129 35.3556C99.5004 35.7484 99.753 36.0507 100.071 36.2624C100.392 36.4706 100.772 36.5554 101.211 36.517Z" fill="white"></path></svg><label for="introEmail"><input className="hiddenInput" id="introEmail" value="" name="email" /></label></div></form></div><div class="sc-95e68857-0 dJPIdZ"><div class="holder"><div class="svgHolder animate" /><img alt=":)" srcset="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fopening_smile.f9ddcc12.png&amp;w=1080&amp;q=90 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fopening_smile.f9ddcc12.png&amp;w=1920&amp;q=90 2x" src="/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fopening_smile.f9ddcc12.png&amp;w=1920&amp;q=90" width="942" height="342" decoding="async" data-nimg="future" style={{color: "transparent"}} /></div></div></div><div class="sc-77b3abf6-0 fMHiKy" style={{opacity: "1", transform: "none"}}><div class="sc-77b3abf6-1 fZxUQY"><div class="sc-77b3abf6-3 bSvGmU"><div class="sc-77b3abf6-5 dKHhQp"><div class="sc-77b3abf6-7 eoXIZm"><div class="sc-77b3abf6-6 fXzBIH"></div><div class="sc-77b3abf6-6 fXzBIH"></div><div class="sc-77b3abf6-6 fXzBIH"></div></div><div type="formcarry" class="sc-77b3abf6-8 gQoZfb">formcarry.com</div></div><div active="1" class="sc-77b3abf6-4 cnrKsn" style={{height:"263px"}}><section style={{opacity: "1", height: "0px"}}><div class="sc-2ce100cc-0 cGxGiq"><img src={iconOfSociety} width="147" height="30" alt="formcarry" class="sc-2ce100cc-1 jszDSm" style={{opacity: "1", transform: "none"}} /><div class="sc-2ce100cc-2 kmZInp" style={{opacity: "1", transform: "none"}} ><div class="sc-2ce100cc-3 fCdDje">🧸</div><div><p class="sc-2ce100cc-4 eGioCf">My Sweet Form</p><p class="sc-2ce100cc-5 kcklea">XXXXXXXX</p></div><div class="sc-2ce100cc-6 bRVjXW">128 Submissions</div></div><div class="sc-2ce100cc-7 eAkeaL" style={{opacity: "1", transform: "none"}}>Your form API endpoint</div><div class="sc-2ce100cc-8 iVpjoU" style={{opacity: "1", transform: "none"}}><div class="sc-2ce100cc-7 eAkeaL">https://formcarry.com/s/XXXXXXX</div><div class="sc-2ce100cc-11 fawVLM"><div class="sc-2ce100cc-9 beSLtW"><div class="sc-2ce100cc-10 cneSBE"></div></div>Copy</div></div><div class="sc-44b66174-0 ilOyGT" style={{opacity:"0",transform:"translateY(75px) translateZ(0)"}}><div class="sc-44b66174-1 gyKqbf">Endpoint copied to clipboard 👏</div></div></div></section></div></div><div class="sc-77b3abf6-2 eVHqTJ"><section style={{opacity: "1",}}><div class="sc-77b3abf6-9 jwUaqp">Click to See Magic ✨</div><div class="sc-77b3abf6-11 fQbFyW"></div></section></div></div></div></div>
      </section>
    </>
  );
}

export default FormApiSection;
