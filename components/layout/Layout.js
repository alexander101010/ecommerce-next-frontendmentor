import MainNavigation from './MainNavigation';

import classes from './Layout.module.scss';

export default function Layout(props) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
