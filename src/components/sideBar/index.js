import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";

const SideBar = () => {
	
	const [movies, setMovies] = useState({})
	const [loading, setLoading] = useState(true)
	
	
	useEffect(() => {
		axios.get('https://api.themoviedb.org/3/movie/upcoming?api_key=2b45247853b02c34d915443548d8a9b5')
			.then(({data}) => {
				setMovies(data.results)
			})
			.finally(() => {
				setLoading(false)
			})
	}, [])
	
	
	return (
		<>
			{
				loading ? <span>loading..</span>:
					<div>
						<div style={{
							display: 'flex',
							alignItems: 'center',
							// gap: '15px',
							fontSize: '15px',
							justifyContent: 'space-around',
							marginBottom: '15px'
						}}>
							<h2>Upcoming Movie</h2>
							<svg width="50" height="50" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M13 25L21 61H26L20 25H13Z" fill="#ED1C24"/>
								<path d="M20 25L26 61H30.31L27.54 25H20Z" fill="#57A4FF"/>
								<path d="M38 61H43L51 25H44L38 61Z" fill="#ED1C24"/>
								<path d="M27.54 25L30.31 61H33.69L36.46 25H27.54Z" fill="#ED1C24"/>
								<path d="M36.46 25L33.69 61H38L44 25H36.46Z" fill="#6AAEFF"/>
								<path d="M52 15.1V15C52 13.9392 51.5786 12.9217 50.8284 12.1716C50.0783 11.4214 49.0609 11 48 11C47.6314 10.9987 47.2645 11.0492 46.91 11.15C46.7159 10.2574 46.2221 9.45818 45.5108 8.88511C44.7995 8.31205 43.9134 7.99971 43 8.00002C42.4509 7.99759 41.9073 8.11024 41.4044 8.3307C40.9015 8.55116 40.4503 8.87455 40.08 9.28002C39.5258 8.2224 38.7415 7.30249 37.7848 6.58798C36.8282 5.87347 35.7235 5.38255 34.5521 5.15134C33.3806 4.92012 32.1723 4.95449 31.0159 5.25193C29.8595 5.54936 28.7845 6.10229 27.87 6.87002C27.592 5.6748 26.8842 4.62354 25.8813 3.9164C24.8784 3.20926 23.6504 2.89563 22.4313 3.03521C21.2121 3.17479 20.0868 3.75784 19.2697 4.67335C18.4526 5.58886 18.0007 6.77289 18 8.00002C17.9984 8.03367 18.0017 8.06737 18.01 8.10002C17.677 8.03656 17.339 8.00309 17 8.00002C15.6739 8.00002 14.4021 8.52681 13.4645 9.46449C12.5268 10.4022 12 11.6739 12 13C12.0013 13.7024 12.1477 14.3969 12.43 15.04C11.1735 15.1992 10.0243 15.8293 9.21438 16.8031C8.40449 17.7768 7.9943 19.0216 8.06666 20.286C8.13902 21.5505 8.68855 22.7404 9.60424 23.6154C10.5199 24.4903 11.7336 24.9852 13 25H51C52.24 25.0013 53.4361 24.5417 54.3563 23.7106C55.2765 22.8796 55.8551 21.7362 55.9797 20.5025C56.1043 19.2688 55.7661 18.0329 55.0307 17.0345C54.2953 16.0362 53.2152 15.3468 52 15.1V15.1Z" fill="#FFB655"/>
								<path d="M23 61H21L13 25H15L23 61Z" fill="#CF1820"/>
								<path d="M17 8C17.3324 8.00306 17.6637 8.03654 17.99 8.1C16.8633 8.33429 15.8517 8.94928 15.1251 9.84162C14.3984 10.734 14.0012 11.8492 14 13C14.0013 13.7024 14.1477 14.3969 14.43 15.04C13.1735 15.1992 12.0243 15.8293 11.2144 16.803C10.4045 17.7768 9.9943 19.0216 10.0667 20.286C10.139 21.5505 10.6885 22.7404 11.6042 23.6153C12.5199 24.4903 13.7336 24.9852 15 25H13C11.7336 24.9852 10.5199 24.4903 9.60424 23.6153C8.68855 22.7404 8.13902 21.5505 8.06666 20.286C7.9943 19.0216 8.40449 17.7768 9.21438 16.803C10.0243 15.8293 11.1735 15.1992 12.43 15.04C12.1477 14.3969 12.0013 13.7024 12 13C12 11.6739 12.5268 10.4021 13.4645 9.46447C14.4021 8.52678 15.6739 8 17 8V8Z" fill="#FFB655"/>
								<path d="M23 3C23.3326 2.99759 23.6646 3.03111 23.99 3.1C22.8633 3.33428 21.8517 3.94928 21.1251 4.84162C20.3984 5.73396 20.0012 6.84924 20 8C19.9984 8.03364 20.0017 8.06735 20.01 8.1C19.677 8.03654 19.339 8.00307 19 8C18.6674 7.99759 18.3354 8.03112 18.01 8.1C18.0017 8.06735 17.9984 8.03364 18 8C18 6.67392 18.5268 5.40215 19.4645 4.46447C20.4021 3.52678 21.6739 3 23 3V3Z" fill="#FFB655"/>
								<path d="M35 13C35 13.2652 35.1054 13.5196 35.2929 13.7071C35.4804 13.8946 35.7348 14 36 14C36.2652 14 36.5196 13.8946 36.7071 13.7071C36.8946 13.5196 37 13.2652 37 13C37 11.9391 36.5786 10.9217 35.8284 10.1716C35.0783 9.42143 34.0609 9 33 9C31.9391 9 30.9217 9.42143 30.1716 10.1716C29.4214 10.9217 29 11.9391 29 13C29 13.2652 29.1054 13.5196 29.2929 13.7071C29.4804 13.8946 29.7348 14 30 14C30.2652 14 30.5196 13.8946 30.7071 13.7071C30.8946 13.5196 31 13.2652 31 13C31 12.4696 31.2107 11.9609 31.5858 11.5858C31.9609 11.2107 32.4696 11 33 11C33.5304 11 34.0391 11.2107 34.4142 11.5858C34.7893 11.9609 35 12.4696 35 13Z" fill="black"/>
								<path d="M27.437 15.637C26.6729 15.4322 25.8652 15.4586 25.1161 15.7128C24.3669 15.967 23.71 16.4376 23.2284 17.0652C22.7467 17.6927 22.4619 18.449 22.4101 19.2384C22.3582 20.0278 22.5416 20.8148 22.937 21.5C23.0696 21.7298 23.2881 21.8975 23.5443 21.9662C23.8006 22.035 24.0737 21.9991 24.3035 21.8665C24.5333 21.7339 24.701 21.5154 24.7698 21.2591C24.8385 21.0029 24.8026 20.7298 24.67 20.5C24.5366 20.2724 24.4495 20.0208 24.4138 19.7594C24.3781 19.4981 24.3944 19.2323 24.4618 18.9773C24.5292 18.7223 24.6464 18.4831 24.8066 18.2736C24.9668 18.0641 25.1669 17.8883 25.3953 17.7564C25.6238 17.6246 25.876 17.5392 26.1376 17.5052C26.3991 17.4712 26.6648 17.4892 26.9194 17.5584C27.1739 17.6275 27.4123 17.7462 27.6207 17.9078C27.8292 18.0694 28.0036 18.2707 28.134 18.5C28.1992 18.6146 28.2864 18.7152 28.3906 18.796C28.4948 18.8768 28.614 18.9362 28.7413 18.9708C28.8686 19.0053 29.0014 19.0144 29.1322 18.9974C29.263 18.9804 29.3891 18.9377 29.5033 18.8717C29.6175 18.8058 29.7176 18.7179 29.7977 18.6132C29.8778 18.5084 29.9364 18.3888 29.9701 18.2613C30.0038 18.1338 30.012 18.0009 29.9941 17.8703C29.9762 17.7396 29.9327 17.6137 29.866 17.5C29.6046 17.0441 29.2554 16.6446 28.8384 16.3248C28.4214 16.005 27.9451 15.7712 27.437 15.637V15.637Z" fill="black"/>
								<path d="M22.4 11.5C22.2695 11.2705 22.2351 10.9986 22.3043 10.7438C22.3734 10.4889 22.5406 10.2718 22.7693 10.1398C22.998 10.0077 23.2696 9.97149 23.5249 10.039C23.7802 10.1065 23.9985 10.2722 24.132 10.5C24.1972 10.6147 24.2844 10.7153 24.3886 10.7961C24.4929 10.8769 24.612 10.9363 24.7393 10.9708C24.8666 11.0054 24.9994 11.0144 25.1302 10.9974C25.261 10.9804 25.3871 10.9377 25.5013 10.8718C25.6155 10.8058 25.7156 10.718 25.7957 10.6132C25.8758 10.5084 25.9344 10.3889 25.9681 10.2614C26.0018 10.1339 26.01 10.001 25.9921 9.8703C25.9742 9.73964 25.9307 9.6138 25.864 9.50003C25.667 9.15859 25.4047 8.85929 25.0921 8.61923C24.7794 8.37916 24.4225 8.20303 24.0418 8.10089C23.2729 7.8946 22.4536 8.0022 21.764 8.40003C21.0744 8.79785 20.5712 9.45331 20.3649 10.2222C20.1586 10.9911 20.2662 11.8105 20.664 12.5C20.7292 12.6147 20.8164 12.7153 20.9206 12.7961C21.0249 12.8769 21.144 12.9363 21.2713 12.9708C21.3986 13.0054 21.5314 13.0144 21.6622 12.9974C21.793 12.9804 21.9191 12.9377 22.0333 12.8718C22.1475 12.8058 22.2476 12.718 22.3277 12.6132C22.4078 12.5084 22.4664 12.3889 22.5001 12.2614C22.5338 12.1339 22.542 12.001 22.5241 11.8703C22.5062 11.7396 22.4627 11.6138 22.396 11.5H22.4Z" fill="black"/>
								<path d="M36 17C35.2044 17 34.4413 17.3161 33.8787 17.8787C33.3161 18.4413 33 19.2044 33 20C33 20.2652 33.1054 20.5196 33.2929 20.7071C33.4804 20.8946 33.7348 21 34 21C34.2652 21 34.5196 20.8946 34.7071 20.7071C34.8946 20.5196 35 20.2652 35 20C35 19.7348 35.1054 19.4804 35.2929 19.2929C35.4804 19.1054 35.7348 19 36 19C36.2652 19 36.5196 19.1054 36.7071 19.2929C36.8946 19.4804 37 19.7348 37 20C37 20.2652 37.1054 20.5196 37.2929 20.7071C37.4804 20.8946 37.7348 21 38 21C38.2652 21 38.5196 20.8946 38.7071 20.7071C38.8946 20.5196 39 20.2652 39 20C39 19.2044 38.6839 18.4413 38.1213 17.8787C37.5587 17.3161 36.7956 17 36 17Z" fill="black"/>
								<path d="M43.768 13.4C43.0781 13.0036 42.2592 12.8968 41.4907 13.103C40.7223 13.3092 40.0668 13.8116 39.668 14.5C39.6013 14.6138 39.5578 14.7396 39.5399 14.8703C39.522 15.001 39.5302 15.1339 39.5639 15.2614C39.5976 15.3889 39.6562 15.5085 39.7363 15.6132C39.8164 15.718 39.9165 15.8059 40.0307 15.8718C40.1449 15.9377 40.271 15.9804 40.4018 15.9974C40.5326 16.0144 40.6654 16.0054 40.7927 15.9708C40.92 15.9363 41.0391 15.8769 41.1434 15.7961C41.2476 15.7153 41.3348 15.6147 41.4 15.5C41.5335 15.2722 41.7518 15.1065 42.0071 15.039C42.2624 14.9715 42.534 15.0077 42.7627 15.1398C42.9914 15.2718 43.1585 15.4889 43.2277 15.7438C43.2969 15.9986 43.2625 16.2705 43.132 16.5C43.0653 16.6138 43.0218 16.7396 43.0039 16.8703C42.986 17.001 42.9942 17.1339 43.0279 17.2614C43.0616 17.3889 43.1202 17.5085 43.2003 17.6132C43.2804 17.718 43.3804 17.8059 43.4947 17.8718C43.6089 17.9377 43.735 17.9804 43.8658 17.9974C43.9966 18.0144 44.1294 18.0054 44.2567 17.9708C44.384 17.9363 44.5031 17.8769 44.6074 17.7961C44.7116 17.7153 44.7988 17.6147 44.864 17.5C45.2612 16.8107 45.369 15.9921 45.1635 15.2235C44.958 14.4549 44.4562 13.7992 43.768 13.4V13.4Z" fill="black"/>
								<path d="M46.964 18.258C46.7818 18.4466 46.681 18.6992 46.6833 18.9614C46.6856 19.2236 46.7908 19.4744 46.9762 19.6598C47.1616 19.8453 47.4124 19.9504 47.6746 19.9527C47.9368 19.955 48.1894 19.8542 48.378 19.672C48.4709 19.579 48.5812 19.5053 48.7026 19.455C48.824 19.4046 48.9541 19.3787 49.0855 19.3787C49.2169 19.3787 49.347 19.4046 49.4684 19.455C49.5898 19.5053 49.7001 19.579 49.793 19.672C49.9802 19.8595 50.0853 20.1136 50.0853 20.3785C50.0853 20.6434 49.9802 20.8975 49.793 21.085C49.7001 21.1779 49.6264 21.2881 49.5761 21.4094C49.5258 21.5308 49.4998 21.6608 49.4998 21.7922C49.4998 21.9235 49.5256 22.0536 49.5758 22.175C49.626 22.2963 49.6997 22.4066 49.7925 22.4995C49.8853 22.5924 49.9956 22.6661 50.1169 22.7165C50.2382 22.7668 50.3683 22.7927 50.4996 22.7927C50.631 22.7928 50.7611 22.7669 50.8824 22.7167C51.0038 22.6665 51.1141 22.5929 51.207 22.5C51.762 21.9358 52.0715 21.1751 52.0682 20.3837C52.0649 19.5923 51.749 18.8343 51.1893 18.2747C50.6296 17.7152 49.8715 17.3995 49.0801 17.3963C48.2887 17.3932 47.5281 17.7029 46.964 18.258Z" fill="black"/>
								<path d="M15.768 16.4C15.4264 16.5968 15.1269 16.8591 14.8868 17.1717C14.6466 17.4843 14.4703 17.8412 14.3682 18.222C14.266 18.6028 14.2399 19 14.2914 19.3908C14.3428 19.7817 14.4708 20.1586 14.668 20.5C14.8015 20.7278 15.0198 20.8935 15.2751 20.961C15.5304 21.0285 15.802 20.9923 16.0307 20.8603C16.2594 20.7282 16.4266 20.5111 16.4957 20.2563C16.5649 20.0014 16.5305 19.7296 16.4 19.5C16.2695 19.2704 16.2351 18.9986 16.3042 18.7437C16.3734 18.4889 16.5406 18.2718 16.7693 18.1397C16.998 18.0077 17.2696 17.9715 17.5249 18.039C17.7802 18.1065 17.9984 18.2722 18.132 18.5C18.1972 18.6146 18.2844 18.7153 18.3886 18.7961C18.4928 18.8769 18.612 18.9363 18.7393 18.9708C18.8666 19.0054 18.9994 19.0144 19.1302 18.9974C19.261 18.9804 19.3871 18.9377 19.5013 18.8718C19.6155 18.8058 19.7156 18.7179 19.7957 18.6132C19.8758 18.5084 19.9344 18.3888 19.9681 18.2613C20.0018 18.1339 20.01 18.0009 19.9921 17.8703C19.9742 17.7396 19.9307 17.6138 19.864 17.5C19.4665 16.8112 18.8118 16.3084 18.0437 16.1021C17.2756 15.8959 16.4571 16.003 15.768 16.4Z" fill="black"/>
								<path d="M52.955 14.325C52.7901 13.1275 52.1977 12.03 51.287 11.2351C50.3763 10.4402 49.2088 10.0015 48 10C47.862 10 47.726 10.006 47.59 10.017C47.1992 9.12368 46.5574 8.36305 45.7426 7.82748C44.9278 7.29191 43.975 7.00445 43 7.00001C42.0536 6.9998 41.1267 7.26932 40.328 7.77701C39.0139 5.93019 37.0506 4.64806 34.8312 4.18743C32.6119 3.72681 30.3005 4.1217 28.36 5.29301C27.7912 4.163 26.8798 3.24169 25.756 2.66074C24.6322 2.07978 23.3535 1.86891 22.1027 2.05825C20.8518 2.24759 19.6928 2.82745 18.7913 3.71498C17.8898 4.60251 17.2919 5.75228 17.083 7.00001H17C16.1016 6.99993 15.2147 7.2016 14.4046 7.59012C13.5946 7.97865 12.8822 8.54412 12.3199 9.2448C11.7576 9.94549 11.3599 10.7635 11.156 11.6384C10.9521 12.5134 10.9473 13.423 11.142 14.3C9.85107 14.7193 8.7407 15.5644 7.99264 16.6969C7.24457 17.8295 6.90312 19.1824 7.02416 20.5343C7.1452 21.8862 7.72157 23.157 8.65893 24.1387C9.59629 25.1203 10.8391 25.7547 12.184 25.938L20.024 61.217C20.0734 61.4391 20.197 61.6377 20.3744 61.78C20.5518 61.9224 20.7725 62 21 62H43C43.2275 62 43.4482 61.9224 43.6256 61.78C43.803 61.6377 43.9266 61.4391 43.976 61.217L51.816 25.938C53.151 25.7529 54.3849 25.1237 55.3187 24.1518C56.2525 23.1799 56.8319 21.9219 56.9634 20.5805C57.095 19.2391 56.7711 17.8925 56.0439 16.7577C55.3167 15.6229 54.2286 14.7659 52.955 14.325V14.325ZM21.8 60L14.247 26H19.153L24.82 60H21.8ZM26.845 60L21.18 26H26.614L29.23 60H26.845ZM31.234 60L28.62 26H35.38L32.764 60H31.234ZM37.151 60H34.77L37.386 26H42.82L37.151 60ZM42.2 60H39.18L44.847 26H49.753L42.2 60ZM51 24H13C11.9892 23.9851 11.0215 23.588 10.2916 22.8886C9.56172 22.1891 9.12371 21.2393 9.06568 20.23C9.00765 19.2208 9.33392 18.227 9.97886 17.4485C10.6238 16.6701 11.5396 16.1647 12.542 16.034C12.6971 16.0158 12.8457 15.9615 12.9761 15.8755C13.1064 15.7896 13.2148 15.6742 13.2926 15.5388C13.3703 15.4034 13.4153 15.2517 13.4239 15.0958C13.4325 14.9399 13.4044 14.7841 13.342 14.641C13.1162 14.1234 12.9998 13.5647 13 13C13 11.9391 13.4214 10.9217 14.1716 10.1716C14.9217 9.42143 15.9391 9.00001 17 9.00001C17.2793 9.00274 17.5578 9.03086 17.832 9.08401C17.9876 9.11211 18.1477 9.1029 18.2991 9.05714C18.4504 9.01138 18.5888 8.93038 18.7028 8.82078C18.8168 8.71118 18.9031 8.5761 18.9548 8.42665C19.0065 8.27719 19.022 8.11761 19 7.96101C19.0053 6.97943 19.3713 6.03406 20.0284 5.30486C20.6855 4.57565 21.5878 4.11353 22.5636 4.00644C23.5393 3.89936 24.5204 4.1548 25.32 4.72413C26.1196 5.29346 26.6819 6.13694 26.9 7.09401C26.9384 7.26086 27.0191 7.41506 27.1342 7.54182C27.2493 7.66858 27.395 7.76366 27.5574 7.81796C27.7198 7.87226 27.8934 7.88395 28.0616 7.85191C28.2298 7.81988 28.3869 7.74519 28.518 7.63501C29.3181 6.96332 30.2587 6.47961 31.2704 6.21946C32.2822 5.95932 33.3394 5.92936 34.3643 6.1318C35.3892 6.33425 36.3556 6.76393 37.1925 7.38924C38.0294 8.01454 38.7154 8.81955 39.2 9.74501C39.2747 9.88721 39.3825 10.0093 39.5144 10.101C39.6463 10.1927 39.7983 10.2513 39.9576 10.2718C40.117 10.2923 40.2789 10.2741 40.4297 10.2188C40.5805 10.1635 40.7157 10.0727 40.824 9.95401C41.0993 9.65101 41.4354 9.40945 41.8103 9.24507C42.1852 9.08069 42.5906 8.99719 43 9.00001C43.6843 9.00256 44.3474 9.23776 44.8804 9.66699C45.4134 10.0962 45.7846 10.694 45.933 11.362C45.962 11.4958 46.0182 11.6223 46.0981 11.7335C46.178 11.8447 46.2799 11.9384 46.3975 12.0086C46.5151 12.0788 46.6458 12.1241 46.7816 12.1417C46.9174 12.1594 47.0554 12.1489 47.187 12.111C47.4513 12.0356 47.7251 11.9982 48 12C48.4014 12.0035 48.7982 12.0868 49.1672 12.245C49.5361 12.4033 49.8699 12.6334 50.1491 12.9219C50.4283 13.2103 50.6473 13.5515 50.7934 13.9254C50.9395 14.2994 51.0097 14.6987 51 15.1C50.9999 15.3305 51.0796 15.554 51.2253 15.7326C51.3711 15.9112 51.5741 16.0339 51.8 16.08C52.7721 16.2774 53.6362 16.829 54.2245 17.6276C54.8129 18.4263 55.0835 19.4151 54.9838 20.402C54.8841 21.3889 54.4212 22.3036 53.6851 22.9685C52.9489 23.6334 51.992 24.001 51 24Z" fill="black"/>
							</svg>
						</div>
						<div>
							{
								movies.slice(0, 10).map(movie => (
									<div className={'sidebar-title'}
									     style={{
											 padding: '10px',
										     textAlign: 'center',
										}}
									     key={movie.id}
									>
										<img
											style={{
												width: '100%',
												borderRadius: '20px',
												marginBottom: '20px'
											}}
											src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
											alt=""/>
										<Link to={`/movie/${movie.id}`}>{movie.title}</Link>
										{/*<p>{movie.overview}</p>*/}
									</div>
								))
							}
						</div>
					</div>
				
			}
		</>
	);
};

export default SideBar;