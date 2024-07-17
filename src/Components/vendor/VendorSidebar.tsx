import React from 'react'
import { useLocation } from 'react-router-dom'

const VendorSidebar = () => {
    const location = useLocation()
    const pathName = location.pathname
    
    const navbarLink = [
        {
            label: "Dashboard",
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.34" d="M10 15V12.5" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M8.39076 2.34988L2.61575 6.97488C1.96575 7.49155 1.54908 8.58318 1.69075 9.39984L2.79908 16.0332C2.99908 17.2165 4.13241 18.1748 5.33241 18.1748H14.6658C15.8574 18.1748 16.9991 17.2082 17.1991 16.0332L18.3074 9.39984C18.4408 8.58318 18.0241 7.49155 17.3824 6.97488L11.6074 2.35822C10.7158 1.64155 9.27409 1.64155 8.39076 2.34988Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>,
            url: "/vendor"
        },
        {
            label: "My Products",
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.4" d="M2.91699 15V5.83332C2.91699 2.49999 3.75033 1.66666 7.08366 1.66666H12.917C16.2503 1.66666 17.0837 2.49999 17.0837 5.83332V14.1667C17.0837 14.2833 17.0837 14.4 17.0753 14.5167" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M5.29199 12.5H17.0837V15.4167C17.0837 17.025 15.7753 18.3333 14.167 18.3333H5.83366C4.22533 18.3333 2.91699 17.025 2.91699 15.4167V14.875C2.91699 13.5667 3.98366 12.5 5.29199 12.5Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M6.66699 5.83334H13.3337" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M6.66699 8.75H10.8337" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ,
            url: "/vendor/my-products"
        },
        {
            label: "Sales",
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63411 9.05832C7.55078 9.04999 7.45078 9.04999 7.35911 9.05832C5.37578 8.99166 3.80078 7.36666 3.80078 5.36666C3.80078 3.32499 5.45078 1.66666 7.50078 1.66666C9.54241 1.66666 11.2007 3.32499 11.2007 5.36666C11.1924 7.36666 9.61741 8.99166 7.63411 9.05832Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M13.6747 3.33334C15.2914 3.33334 16.5914 4.64168 16.5914 6.25001C16.5914 7.82501 15.3414 9.10834 13.7831 9.16668C13.7164 9.15834 13.6414 9.15834 13.5664 9.16668" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.46758 12.1333C1.45091 13.4833 1.45091 15.6833 3.46758 17.025C5.75924 18.5583 9.51758 18.5583 11.8092 17.025C13.8259 15.675 13.8259 13.475 11.8092 12.1333C9.52591 10.6083 5.76758 10.6083 3.46758 12.1333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M15.2832 16.6667C15.8832 16.5417 16.4499 16.3 16.9165 15.9417C18.2165 14.9667 18.2165 13.3583 16.9165 12.3833C16.4582 12.0333 15.8999 11.8 15.3082 11.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            ,
            url: "/my-sales"
        },
        {
            label: "Analytics",
            icon: <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.63411 9.05832C7.55078 9.04999 7.45078 9.04999 7.35911 9.05832C5.37578 8.99166 3.80078 7.36666 3.80078 5.36666C3.80078 3.32499 5.45078 1.66666 7.50078 1.66666C9.54241 1.66666 11.2007 3.32499 11.2007 5.36666C11.1924 7.36666 9.61741 8.99166 7.63411 9.05832Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M13.6747 3.33334C15.2914 3.33334 16.5914 4.64168 16.5914 6.25001C16.5914 7.82501 15.3414 9.10834 13.7831 9.16668C13.7164 9.15834 13.6414 9.15834 13.5664 9.16668" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M3.46758 12.1333C1.45091 13.4833 1.45091 15.6833 3.46758 17.025C5.75924 18.5583 9.51758 18.5583 11.8092 17.025C13.8259 15.675 13.8259 13.475 11.8092 12.1333C9.52591 10.6083 5.76758 10.6083 3.46758 12.1333Z" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            <path opacity="0.4" d="M15.2832 16.6667C15.8832 16.5417 16.4499 16.3 16.9165 15.9417C18.2165 14.9667 18.2165 13.3583 16.9165 12.3833C16.4582 12.0333 15.8999 11.8 15.3082 11.6667" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            
            ,
            url: "/my-sales"
        },
    ]
    return (
        <div className='flex flex-col gap-[20px] py-[20px] px-[40px] h-screen bg-primary'>
            <div>
                <svg width="150" height="48" viewBox="0 0 150 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M68.1934 13.1399C68.1934 12.6745 68.3732 12.2839 68.7328 11.9681C69.1096 11.6357 69.5632 11.4694 70.094 11.4694H81.7807C81.7807 12.5665 81.5924 13.3643 81.2156 13.863C80.8388 14.3617 80.231 14.611 79.3921 14.611H71.969V18.4258H78.6985C78.6985 19.5229 78.5102 20.3208 78.1334 20.8195C77.7568 21.3181 77.1488 21.5674 76.3099 21.5674H71.969V26.629C71.969 27.51 71.6693 28.1499 71.0701 28.5489C70.4879 28.9477 69.529 29.1472 68.1934 29.1472V13.1399ZM88.8634 14.636H82.6733C82.6733 12.5249 83.6579 11.4694 85.6271 11.4694H98.8034C98.8034 13.5805 97.8188 14.636 95.8496 14.636H92.639V26.5042C92.639 27.3687 92.3137 28.0252 91.663 28.474C91.0294 28.9228 90.0962 29.1472 88.8634 29.1472V14.636ZM100.851 13.1399C100.851 12.6745 101.031 12.2839 101.391 11.9681C101.767 11.6357 102.221 11.4694 102.752 11.4694H114.233C114.233 12.5665 114.045 13.3643 113.668 13.863C113.291 14.3617 112.684 14.611 111.844 14.611H104.627V18.5505H111.356C111.356 19.6476 111.168 20.4454 110.791 20.9442C110.414 21.4428 109.807 21.6921 108.968 21.6921H104.627V25.7812H112.384C113.206 25.7812 113.805 26.0305 114.182 26.5293C114.559 27.0279 114.747 27.8257 114.747 28.9228H102.752C102.221 28.9228 101.767 28.765 101.391 28.4491C101.031 28.1332 100.851 27.7344 100.851 27.2523V13.1399ZM117.055 13.1399C117.055 12.6579 117.235 12.259 117.595 11.9431C117.971 11.6273 118.425 11.4694 118.956 11.4694H125.711C127.628 11.4694 129.102 11.9514 130.129 12.9155C131.173 13.863 131.696 15.2176 131.696 16.9797C131.696 17.9604 131.49 18.7831 131.079 19.4481C130.685 20.113 130.068 20.6367 129.23 21.0189V21.1186C130.72 21.7669 131.465 22.9887 131.465 24.7839V26.5042C131.465 27.3687 131.139 28.0252 130.489 28.474C129.855 28.9228 128.922 29.1472 127.689 29.1472V24.9085C127.689 24.0775 127.517 23.4706 127.175 23.0884C126.85 22.6894 126.344 22.4899 125.66 22.4899H120.78V26.5042C120.78 27.3687 120.462 28.0252 119.829 28.474C119.195 28.9228 118.271 29.1472 117.055 29.1472V13.1399ZM125.506 19.3734C126.293 19.3734 126.893 19.1656 127.304 18.75C127.715 18.3343 127.92 17.736 127.92 16.9548C127.92 16.1403 127.723 15.5418 127.329 15.1596C126.952 14.7773 126.344 14.5861 125.506 14.5861H120.78V19.3734H125.506ZM141.531 29.1472C139.133 29.1472 137.232 28.7484 135.829 27.9504C134.442 27.1525 133.748 26.0472 133.748 24.6343C133.748 24.0192 133.988 23.5206 134.468 23.1382C134.947 22.756 135.752 22.5648 136.882 22.5648C136.95 23.7783 137.378 24.7008 138.166 25.3324C138.971 25.9474 140.093 26.2549 141.531 26.2549C142.644 26.2549 143.517 26.0721 144.151 25.7064C144.784 25.3242 145.101 24.8005 145.101 24.1356C145.101 23.6868 144.981 23.3211 144.742 23.0385C144.501 22.756 144.082 22.4983 143.483 22.2655C142.901 22.0329 142.045 21.7918 140.915 21.5425C139.202 21.1602 137.858 20.728 136.882 20.2459C135.906 19.764 135.195 19.1905 134.75 18.5256C134.322 17.8606 134.108 17.0296 134.108 16.0323C134.108 15.0847 134.399 14.2537 134.981 13.5389C135.58 12.8075 136.411 12.2423 137.473 11.8434C138.534 11.4445 139.767 11.245 141.172 11.245C142.507 11.245 143.705 11.4195 144.767 11.7686C145.829 12.101 146.659 12.5748 147.259 13.1898C147.858 13.8049 148.158 14.5113 148.158 15.3091C148.158 15.9243 147.917 16.4145 147.439 16.7802C146.976 17.1292 146.206 17.3205 145.127 17.3536C145.041 16.24 144.69 15.4255 144.074 14.9102C143.457 14.3949 142.49 14.1373 141.172 14.1373C140.093 14.1373 139.262 14.3035 138.68 14.636C138.097 14.9684 137.807 15.4504 137.807 16.0821C137.807 16.5142 137.918 16.8717 138.141 17.1543C138.363 17.4202 138.74 17.6611 139.271 17.8773C139.818 18.0934 140.597 18.3094 141.608 18.5256C143.371 18.9079 144.767 19.3483 145.795 19.8471C146.839 20.329 147.593 20.9109 148.055 21.5923C148.534 22.2739 148.774 23.1133 148.774 24.1107C148.774 25.1247 148.474 26.0139 147.875 26.7786C147.293 27.5433 146.453 28.1332 145.358 28.5489C144.279 28.9477 143.003 29.1472 141.531 29.1472Z" fill="white" />
                    <path d="M8.88743 29.1472C7.34633 29.1472 5.96791 28.8564 4.75216 28.2745C3.53641 27.6928 2.58607 26.8866 1.90112 25.8561C1.23332 24.8088 0.899414 23.6203 0.899414 22.2906V18.0519C0.899414 16.7221 1.22476 15.5418 1.87544 14.5113C2.54326 13.4807 3.4679 12.6829 4.64942 12.1177C5.84804 11.5359 7.20935 11.245 8.73332 11.245C10.2573 11.245 11.6186 11.4694 12.8172 11.9182C14.0159 12.3504 14.9405 12.9654 15.5912 13.7633C16.259 14.5612 16.5929 15.4671 16.5929 16.4811C16.5929 17.1459 16.3703 17.6695 15.9251 18.0519C15.4799 18.4176 14.872 18.6004 14.1015 18.6004C13.6563 18.6004 13.2197 18.5422 12.7915 18.4258C12.8429 18.0768 12.8686 17.6529 12.8686 17.1543C12.8686 16.3564 12.4833 15.7081 11.7128 15.2094C10.9422 14.6941 9.94907 14.4365 8.73332 14.4365C7.53469 14.4365 6.55865 14.7773 5.80523 15.4587C5.05181 16.1236 4.6751 16.9879 4.6751 18.0519V22.2906C4.6751 23.371 5.06038 24.252 5.83093 24.9334C6.61859 25.615 7.63742 25.9558 8.88743 25.9558C10.1032 25.9558 11.0878 25.7064 11.8412 25.2078C12.6117 24.709 12.997 24.0609 12.997 23.2629C12.997 22.7145 12.9713 22.3155 12.92 22.0662C13.3823 21.9664 13.8018 21.9165 14.1785 21.9165C14.9491 21.9165 15.5656 22.1077 16.0279 22.4899C16.4902 22.8723 16.7213 23.3959 16.7213 24.0609C16.7213 25.0414 16.3874 25.9225 15.7196 26.7037C15.0689 27.4684 14.1443 28.0668 12.9457 28.4989C11.7641 28.9311 10.4114 29.1472 8.88743 29.1472ZM19.0214 13.1399C19.0214 12.6579 19.2011 12.259 19.5608 11.9431C19.9375 11.6273 20.3912 11.4694 20.9221 11.4694H27.6772C29.5949 11.4694 31.0676 11.9514 32.095 12.9155C33.1394 13.863 33.6617 15.2176 33.6617 16.9797C33.6617 17.9604 33.4564 18.7831 33.0454 19.4481C32.6515 20.113 32.035 20.6367 31.196 21.0189V21.1186C32.6858 21.7669 33.4306 22.9887 33.4306 24.7839V26.5042C33.4306 27.3687 33.1052 28.0252 32.4545 28.474C31.8209 28.9228 30.8878 29.1472 29.6549 29.1472V24.9085C29.6549 24.0775 29.4836 23.4706 29.1412 23.0884C28.8158 22.6894 28.3106 22.4899 27.6259 22.4899H22.7456V26.5042C22.7456 27.3687 22.4288 28.0252 21.7954 28.474C21.1618 28.9228 20.237 29.1472 19.0214 29.1472V13.1399ZM27.4717 19.3734C28.2593 19.3734 28.8587 19.1656 29.2697 18.75C29.6806 18.3343 29.8861 17.736 29.8861 16.9548C29.8861 16.1403 29.6891 15.5418 29.2954 15.1596C28.9186 14.7773 28.3106 14.5861 27.4717 14.5861H22.7456V19.3734H27.4717Z" fill="white" />
                    <path d="M62.3816 7.48005H59.7541V8.72478C59.7541 10.0981 58.5787 11.2201 57.1264 11.2201C55.6802 11.2201 54.4988 10.104 54.4988 8.72478V7.48005H49.2497V8.72478C49.2497 10.0981 48.0743 11.2201 46.622 11.2201C45.176 11.2201 43.9945 10.104 43.9945 8.72478V7.48005H41.3791C41.3791 19.9447 40.0684 29.9202 40.0684 29.9202H63.6985C63.6923 29.9202 62.3816 19.9447 62.3816 7.48005ZM46.6282 9.9754C47.3543 9.9754 47.939 9.42019 47.939 8.73063V6.23532C47.939 4.16663 49.6988 2.4953 51.8773 2.4953C54.0557 2.4953 55.8157 4.16663 55.8157 6.23532V8.73063C55.8157 9.42019 56.4002 9.9754 57.1264 9.9754C57.8525 9.9754 58.4371 9.42019 58.4371 8.73063V6.23532C58.4432 2.79333 55.5019 0 51.8773 0C48.2527 0 45.3113 2.79333 45.3113 6.23532V8.73063C45.3175 9.41434 45.902 9.9754 46.6282 9.9754Z" fill="#C9974C" />
                    <path d="M80.1821 41.5313C79.7121 41.9874 79.1607 42.3458 78.5279 42.6065C77.9046 42.867 77.2382 42.9974 76.5285 42.9974C75.819 42.9974 75.1526 42.867 74.5293 42.6065C73.9059 42.3458 73.3641 41.9874 72.9039 41.5313C72.4341 41.0844 72.0648 40.5585 71.7963 39.9534C71.528 39.3483 71.3936 38.7015 71.3936 38.0127C71.3936 37.3238 71.528 36.677 71.7963 36.0719C72.0648 35.4575 72.4341 34.9221 72.9039 34.4661C73.3641 34.0193 73.9059 33.6656 74.5293 33.4049C75.1526 33.135 75.819 33 76.5285 33C77.2382 33 77.9046 33.135 78.5279 33.4049C79.1607 33.6656 79.7121 34.0193 80.1821 34.4661C80.6423 34.9221 81.0066 35.4575 81.2751 36.0719C81.5532 36.677 81.6923 37.3238 81.6923 38.0127C81.6923 38.7015 81.5532 39.3483 81.2751 39.9534C81.0066 40.5585 80.6423 41.0844 80.1821 41.5313ZM73.3211 41.1404C73.7238 41.5499 74.1984 41.871 74.745 42.1037C75.3011 42.3365 75.8861 42.4529 76.4999 42.4529C77.1327 42.4529 77.7272 42.3365 78.2834 42.1037C78.8492 41.871 79.343 41.5499 79.7649 41.1404C80.1771 40.74 80.5032 40.2746 80.7429 39.744C80.9826 39.2042 81.1026 38.627 81.1026 38.0127C81.1026 37.3983 80.9826 36.8258 80.7429 36.2952C80.5032 35.7554 80.1771 35.2806 79.7649 34.871C79.343 34.4708 78.8538 34.1543 78.2978 33.9216C77.7512 33.6795 77.1615 33.5585 76.5285 33.5585C75.9053 33.5585 75.3155 33.6795 74.7594 33.9216C74.2128 34.1543 73.7333 34.4708 73.3211 34.871C72.9087 35.2713 72.5826 35.7459 72.3429 36.2952C72.1032 36.8351 71.9834 37.4123 71.9834 38.0267C71.9834 38.6318 72.1032 39.2042 72.3429 39.744C72.5826 40.2839 72.9087 40.7493 73.3211 41.1404ZM85.4771 42.8856H82.701V42.3411H83.823V38.1942H82.7874V37.6496H84.2976L84.312 38.1522C84.3216 38.3106 84.3312 38.4548 84.3408 38.5851C84.3504 38.7062 84.3599 38.8457 84.3696 39.0041C84.5613 38.5665 84.8682 38.2128 85.2902 37.9428C85.712 37.6728 86.1915 37.538 86.7285 37.538C87.2558 37.538 87.6729 37.6823 87.9798 37.9707C88.2866 38.2593 88.4496 38.6363 88.4688 39.1017V42.3411H89.5332V42.8856H86.7572V42.3411H87.8792V39.2553C87.86 38.9481 87.7449 38.6876 87.534 38.4734C87.3326 38.25 87.0305 38.129 86.6277 38.1104C86.3304 38.1104 86.0477 38.157 85.7792 38.25C85.5105 38.343 85.2804 38.4734 85.0887 38.6409C84.8777 38.8178 84.71 39.0227 84.5853 39.2553C84.4703 39.488 84.4127 39.744 84.4127 40.0233V42.3411H85.4771V42.8856ZM93.315 42.8856H90.539V42.3411H91.6034V32.9582H90.5822V32.4135H92.1932V42.3411H93.315V42.8856ZM97.0935 42.8856H94.3175V42.3411H95.4249V38.1942H94.3175V37.6496H96.0147V42.3411H97.0935V42.8856ZM96.2016 35.7926C96.2016 35.9229 96.1538 36.0347 96.0579 36.1277C95.9621 36.2115 95.8517 36.2534 95.727 36.2534C95.612 36.2534 95.5065 36.2115 95.4107 36.1277C95.3147 36.0347 95.2668 35.9229 95.2668 35.7926C95.2668 35.6622 95.3147 35.5553 95.4107 35.4714C95.5065 35.3784 95.612 35.3318 95.727 35.3318C95.8517 35.3318 95.9621 35.3784 96.0579 35.4714C96.1538 35.5553 96.2016 35.6622 96.2016 35.7926ZM100.872 42.8856H98.096V42.3411H99.2178V38.1942H98.1822V37.6496H99.6924L99.7068 38.1522C99.7166 38.3106 99.726 38.4548 99.7356 38.5851C99.7452 38.7062 99.7548 38.8457 99.7644 39.0041C99.9563 38.5665 100.263 38.2128 100.685 37.9428C101.107 37.6728 101.586 37.538 102.123 37.538C102.651 37.538 103.068 37.6823 103.374 37.9707C103.682 38.2593 103.845 38.6363 103.863 39.1017V42.3411H104.928V42.8856H102.152V42.3411H103.274V39.2553C103.255 38.9481 103.14 38.6876 102.929 38.4734C102.727 38.25 102.425 38.129 102.023 38.1104C101.725 38.1104 101.443 38.157 101.174 38.25C100.905 38.343 100.675 38.4734 100.483 38.6409C100.273 38.8178 100.105 39.0227 99.9801 39.2553C99.8651 39.488 99.8076 39.744 99.8076 40.0233V42.3411H100.872V42.8856ZM108.753 38.0964C108.388 38.0964 108.053 38.171 107.746 38.3198C107.449 38.4687 107.199 38.669 106.998 38.9202C106.806 39.1623 106.672 39.4368 106.595 39.744C106.518 40.0419 106.514 40.3491 106.581 40.6656C107.233 40.4142 107.881 40.1676 108.523 39.9255C109.175 39.6743 109.827 39.4229 110.479 39.1716C110.306 38.8551 110.067 38.5991 109.76 38.4036C109.463 38.1989 109.127 38.0964 108.753 38.0964ZM110.637 42.2573C110.387 42.4808 110.105 42.6576 109.788 42.788C109.472 42.9183 109.127 42.9834 108.753 42.9834C108.359 42.9834 107.991 42.9135 107.645 42.774C107.309 42.6344 107.012 42.4388 106.754 42.1875C106.495 41.9361 106.293 41.6477 106.149 41.3219C106.006 40.9959 105.934 40.6424 105.934 40.2606C105.934 39.8883 106.006 39.5346 106.149 39.1995C106.293 38.8644 106.495 38.5758 106.754 38.3337C107.012 38.0918 107.309 37.901 107.645 37.7613C107.991 37.6124 108.359 37.538 108.753 37.538C109.05 37.538 109.333 37.5891 109.602 37.6916C109.87 37.7846 110.11 37.9242 110.321 38.1104C110.522 38.2779 110.7 38.4827 110.853 38.7248C111.006 38.9574 111.131 39.2135 111.227 39.4928C110.479 39.7812 109.731 40.0652 108.983 40.3445C108.244 40.6236 107.502 40.9122 106.754 41.2101C106.926 41.5731 107.19 41.8664 107.545 42.0897C107.899 42.3132 108.302 42.4248 108.753 42.4248C109.05 42.4248 109.328 42.3737 109.587 42.2712C109.846 42.1689 110.076 42.0246 110.278 41.8385L110.637 42.2573ZM119.889 42.4388C119.745 42.6065 119.558 42.7413 119.328 42.8438C119.107 42.9462 118.834 42.9974 118.508 42.9974C118.201 42.9974 117.899 42.9602 117.602 42.8856C117.314 42.8205 117.06 42.6855 116.84 42.4808V41.4615H117.372V42.1736C117.554 42.2853 117.741 42.3597 117.933 42.3969C118.125 42.4248 118.326 42.4388 118.537 42.4388C118.681 42.4388 118.819 42.4202 118.954 42.383C119.088 42.3365 119.213 42.2712 119.328 42.1875C119.434 42.1037 119.515 42.006 119.572 41.8943C119.639 41.7734 119.673 41.6291 119.673 41.4615C119.673 41.2194 119.61 41.0333 119.486 40.9029C119.362 40.7726 119.198 40.6703 118.997 40.5957C118.805 40.512 118.594 40.4375 118.364 40.3724C118.134 40.3073 117.918 40.2281 117.717 40.1349C117.516 40.0419 117.348 39.9116 117.213 39.744C117.089 39.5672 117.027 39.3252 117.027 39.018C117.027 38.7666 117.07 38.5526 117.156 38.3757C117.252 38.1989 117.377 38.0499 117.53 37.9289C117.683 37.8078 117.861 37.7195 118.062 37.6635C118.263 37.5984 118.451 37.5659 118.623 37.5659C118.747 37.5659 118.868 37.5752 118.983 37.5938C119.098 37.6031 119.232 37.631 119.385 37.6775C119.51 37.7241 119.63 37.7799 119.745 37.845C119.86 37.901 119.966 37.9707 120.062 38.0546V39.0738H119.515V38.3478C119.38 38.2733 119.242 38.2175 119.098 38.1803C118.954 38.1431 118.801 38.1243 118.637 38.1243C118.513 38.1243 118.384 38.1431 118.249 38.1803C118.125 38.2082 118.014 38.2547 117.918 38.3198C117.832 38.3943 117.76 38.4873 117.703 38.5991C117.645 38.7108 117.616 38.8457 117.616 39.0041C117.616 39.2088 117.683 39.3717 117.818 39.4928C117.962 39.6044 118.129 39.6975 118.321 39.7719C118.522 39.8558 118.733 39.9348 118.954 40.0094C119.184 40.0745 119.4 40.163 119.601 40.2746C119.793 40.3863 119.952 40.5306 120.076 40.7075C120.21 40.8843 120.277 41.1216 120.277 41.4195C120.277 41.5871 120.243 41.7639 120.177 41.9502C120.119 42.1269 120.023 42.29 119.889 42.4388ZM124.007 42.8856H121.231V42.3411H122.353V32.9582H121.288V32.4135H122.942V38.3757L122.899 39.0041C123.101 38.5572 123.407 38.2034 123.82 37.9428C124.232 37.6823 124.712 37.5471 125.258 37.538C125.785 37.538 126.202 37.6823 126.509 37.9707C126.816 38.2593 126.979 38.6363 126.998 39.1017V42.3411H128.063V42.8856H125.287V42.3411H126.409V39.2553C126.389 38.9481 126.274 38.6876 126.063 38.4734C125.862 38.25 125.56 38.129 125.157 38.1104C124.859 38.1104 124.577 38.157 124.309 38.25C124.04 38.343 123.809 38.4734 123.618 38.6409C123.407 38.8178 123.239 39.0227 123.115 39.2553C123 39.488 122.942 39.744 122.942 40.0233V42.3411H124.007V42.8856ZM133.93 42.1875C133.671 42.4388 133.364 42.6344 133.01 42.774C132.665 42.9135 132.295 42.9834 131.902 42.9834C131.499 42.9834 131.126 42.9135 130.78 42.774C130.444 42.6344 130.152 42.4388 129.903 42.1875C129.644 41.9454 129.443 41.6616 129.299 41.3358C129.155 41.0007 129.083 40.6424 129.083 40.2606C129.083 39.8883 129.155 39.5346 129.299 39.1995C129.443 38.8644 129.644 38.5712 129.903 38.3198C130.152 38.0778 130.449 37.887 130.795 37.7474C131.14 37.5984 131.509 37.524 131.902 37.524C132.295 37.524 132.665 37.5984 133.01 37.7474C133.364 37.887 133.671 38.0778 133.93 38.3198C134.179 38.5712 134.376 38.8644 134.52 39.1995C134.673 39.5346 134.75 39.8883 134.75 40.2606C134.75 40.6424 134.673 40.9959 134.52 41.3219C134.376 41.6477 134.179 41.9361 133.93 42.1875ZM130.32 41.7827C130.521 41.9874 130.756 42.1457 131.025 42.2573C131.293 42.369 131.581 42.4248 131.888 42.4248C132.194 42.4248 132.482 42.369 132.751 42.2573C133.028 42.1457 133.269 41.9874 133.47 41.7827C133.681 41.5964 133.844 41.373 133.959 41.1123C134.074 40.8518 134.132 40.5678 134.132 40.2606C134.132 39.9722 134.074 39.6975 133.959 39.4368C133.844 39.1668 133.681 38.9295 133.47 38.7248C133.269 38.5293 133.028 38.3757 132.751 38.264C132.482 38.1522 132.194 38.0964 131.888 38.0964C131.581 38.0964 131.293 38.1522 131.025 38.264C130.756 38.3757 130.521 38.5293 130.32 38.7248C130.119 38.9295 129.96 39.1623 129.845 39.4229C129.73 39.6834 129.673 39.9627 129.673 40.2606C129.673 40.5678 129.73 40.8518 129.845 41.1123C129.96 41.373 130.119 41.5964 130.32 41.7827ZM135.87 46.3764V45.8318H136.834V38.1942H135.755V37.6496H137.308C137.308 37.8638 137.312 38.0778 137.323 38.2919C137.341 38.4966 137.352 38.7015 137.352 38.9063C137.514 38.5433 137.797 38.2268 138.2 37.9568C138.603 37.6868 139.092 37.5519 139.667 37.5519C140.051 37.5519 140.415 37.6217 140.76 37.7613C141.106 37.901 141.408 38.0964 141.667 38.3478C141.926 38.5991 142.127 38.8923 142.271 39.2274C142.415 39.5532 142.487 39.9023 142.487 40.2746C142.487 40.6469 142.415 41.0007 142.271 41.3358C142.127 41.6709 141.926 41.9594 141.667 42.2015C141.408 42.4436 141.106 42.639 140.76 42.788C140.415 42.9275 140.051 42.9974 139.667 42.9974C139.38 42.9974 139.11 42.9602 138.862 42.8856C138.612 42.8205 138.391 42.7227 138.2 42.5924C137.999 42.4715 137.83 42.3411 137.697 42.2015C137.571 42.0525 137.476 41.8943 137.409 41.7267C137.409 41.8199 137.409 41.913 137.409 42.006C137.418 42.0897 137.423 42.1736 137.423 42.2573V45.8318H138.646V46.3764H135.87ZM139.667 38.1104C139.341 38.1104 139.038 38.1662 138.761 38.2779C138.492 38.3897 138.258 38.5433 138.056 38.7387C137.855 38.9342 137.697 39.1668 137.582 39.4368C137.476 39.6975 137.423 39.9767 137.423 40.2746C137.423 40.5818 137.481 40.8704 137.596 41.1404C137.711 41.4009 137.873 41.6337 138.085 41.8385C138.287 42.0246 138.521 42.1736 138.79 42.2853C139.058 42.3876 139.351 42.4388 139.667 42.4388C139.964 42.4388 140.247 42.3876 140.516 42.2853C140.784 42.1736 141.019 42.0246 141.221 41.8385C141.431 41.643 141.595 41.4102 141.71 41.1404C141.834 40.8704 141.897 40.5818 141.897 40.2746C141.897 39.9582 141.834 39.665 141.71 39.395C141.595 39.125 141.431 38.8923 141.221 38.6969C141.019 38.52 140.784 38.3804 140.516 38.2779C140.247 38.1662 139.964 38.1104 139.667 38.1104Z" fill="white" />
                    <path d="M0 36.9016H66.7807V42.8856H6.16438C2.75988 42.8856 0 40.2064 0 36.9016Z" fill="#C9974C" />
                </svg>

            </div>

            <div className='flex flex-col gap-[20px]'>
                {navbarLink.map((item,index)=>{
                    return(
                        <a href={item.url} key={index} className={` ${pathName === item.url ? "bg-secondary" : ""} rounded-[12px] p-2 flex flex-row gap-[10px] items-center`}>
                            <div>{item.icon}</div>
                            <span className=' text-white font-[600]'>{item.label}</span>
                        </a>
                    )
                })}

            </div>

        </div>
    )
}

export default VendorSidebar