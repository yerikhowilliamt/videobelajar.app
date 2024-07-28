import Link from "next/link";

const Breadcrumbs = () => {
  return (
    <div className="flex gap-2">
      <Link
        className="text-body-medium text-dark-secondary font-body"
        href="/beranda"
      >
        Beranda
      </Link>
      <span className="text-dark-secondary">/</span>
      <Link
        className="text-body-medium text-dark-secondary font-body"
        href="/bisnis"
      >
        Bisnis
      </Link>
      <span className="text-dark-secondary">/</span>
      <Link
        className="text-body-medium text-dark-primary font-body line-clamp-1"
        href="/detail"
      >
        Gapai Karier Impianmu sebagai Seorang UI/UX Designer & Product Manager.
      </Link>
    </div>
  );
};

export default Breadcrumbs;
