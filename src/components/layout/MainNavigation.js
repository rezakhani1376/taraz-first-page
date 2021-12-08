import { Link, NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css';

const MainNavigation = () => {
	return (
		<header className={classes.header}>
			<div className={classes.container}>
				<div className={classes.logo}>Taraz</div>
				<div>
					<nav>
						<ul className={classes['nav-items']} style={{ display: 'flex' }}>
							<li className={classes['nav-item']}>
								<NavLink activeClassName={classes.active} to="#home">خانه </NavLink>
							</li>

							<li className={classes['nav-item']}>
								<NavLink activeClassName={classes.active} to="/">
									وب اپلیکیشن
								</NavLink>
							</li>
							<li className={classes['nav-item']}>
								<NavLink to="/">پنل آموزشگاه</NavLink>
							</li>
							<li className={classes['nav-item']}>
								<NavLink to="/"> وبلاگ </NavLink>
							</li>
							<li className={classes['nav-item']}>
								<NavLink to="/"> درباره ما</NavLink>
							</li>
							<li className={classes['nav-item']}>
								<NavLink to="/">ویژگی ها</NavLink>
							</li>
							{/* <li className={classes['nav-item']}>
								<NavLink to="/">دانلود</NavLink>
							</li> */}
						</ul>
					</nav>
				</div>
				<div className={classes.button}>
					<Link className={''} to='/login'> ثبت نام </Link>
				</div>
			</div>
		</header>
	);
};

export default MainNavigation;
