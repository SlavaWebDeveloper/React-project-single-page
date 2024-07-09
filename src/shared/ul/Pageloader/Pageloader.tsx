import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Pageloader.module.scss';
import { Loader } from '../Loader/Loader';

interface PageloaderProps {
  className?: string;
}

export const Pageloader = ({ className }: PageloaderProps) => (
    <div className={classNames(cls.Pageloader, {}, [className])}>
        <Loader />
    </div>
);

export default Pageloader;
