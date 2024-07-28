"use client";
import Image from "next/image";
import Button from "../Elements/Button/Button";

const DescProduct = () => {
  return (
    <div className="w-full flex flex-col gap-9">
      <Description />
      <Tutor />
      <Materi />
      <RatingAndReview />
    </div>
  );
};

const Description = () => {
  return (
    <article className="bg-white flex flex-col p-6 gap-6 border rounded-[10px]">
      <h5 className="text-h5 text-dark-primary font-semibold font-heading">
        Deskripsi
      </h5>
      <p>
        Foundations of User Experience (UX) Design adalah yang pertama dari
        rangkaian tujuh kursus yang akan membekali Anda dengan keterampilan yang
        dibutuhkan untuk melamar pekerjaan tingkat pemula dalam desain
        pengalaman pengguna. Desainer UX fokus pada interaksi yang dilakukan
        orang dengan produk seperti situs web, aplikasi seluler, dan objek
        fisik. Desainer UX membuat interaksi sehari-hari itu dapat digunakan,
        menyenangkan, dan dapat diakses. Peran seorang desainer UX tingkat
        pemula mungkin termasuk berempati dengan pengguna, menentukan poin rasa
        sakit mereka, memunculkan ide untuk solusi desain, membuat wireframe,
        prototipe, dan maket, dan menguji desain untuk mendapatkan umpan balik.
      </p>
    </article>
  );
};

const Tutor = () => {
  return (
    <article className="bg-white flex flex-col p-6 gap-6 border rounded-[10px]">
      <h5 className="text-h5 text-dark-primary font-semibold font-heading">
        Belajar bersama Tutor Profesional
      </h5>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 p-5 border rounded-[10px]">
          <div className="flex gap-2.5">
            <Image
              src="/avatars/Avatar-08.png"
              alt="avatar"
              width={40}
              height={40}
            />
            <div>
              <span className="text-dark-primary text-body-small md:text-body-medium font-body font-medium leading-[22.4px]">
                Gregorius Edrik Lawanto
              </span>
              <p className="flex gap-1 text-body-small text-dark-secondary font-body">
                Senior Talent Acquisition{" "}
                <span className="hidden md:block">di </span>
                <span className="hidden md:block text-dark-secondary font-body font-semibold">
                  WingsGroup
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-body-medium text-dark-primary font-body">
              Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja
              sebagai Senior Talent Acquisition Specialist di Wings Group
              Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-5 border rounded-[10px]">
          <div className="flex gap-2.5">
            <Image
              src="/avatars/Avatar-08.png"
              alt="avatar"
              width={40}
              height={40}
            />
            <div>
              <span className="text-dark-primary text-body-small md:text-body-medium font-body font-medium leading-[22.4px]">
                Gregorius Edrik Lawanto
              </span>
              <p className="flex gap-1 text-body-small text-dark-secondary font-body">
                Senior Talent Acquisition{" "}
                <span className="hidden md:block">di </span>
                <span className="hidden md:block text-dark-secondary font-body font-semibold">
                  WingsGroup
                </span>
              </p>
            </div>
          </div>
          <div>
            <p className="text-body-medium text-dark-primary font-body">
              Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja
              sebagai Senior Talent Acquisition Specialist di Wings Group
              Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

const Materi = () => {
  return (
    <div className="bg-white flex flex-col gap-6 p-5 border rounded-[10px]">
      <h5 className="text-h5 text-dark-primary font-semibold font-heading">
        Kamu akan Mempelajari
      </h5>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center w-full p-0">
          <h6 className="text-h6 text-primary font-heading font-semibold line-clamp-1">
            Introducing to Course 1: Foundations of User Experience Design
          </h6>
          <Button
            className="w-6 h-6 flex justify-center items-center"
            src="/icons/Arrow Up Icon.png"
            width={14}
            height={7}
          />
        </div>
        <div className="flex p-5 justify-between items-center border bg-white rounded-[10px]">
          <p className="text-body-small md:text-body-medium text-dark-primary font-body font-medium leading-[19.6px]">
            The basic of user experience design
          </p>
          <div className="hidden md:flex gap-4 h-6">
            <div className="flex gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <Image
                  src="/icons/Play Button Icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
              <span className="text-body-medium text-dark-secondary font-body">
                Video
              </span>
            </div>
            <div className="flex gap-2">
            <div className="w-6 h-6 flex justify-center items-center">
              <Image
                width={18}
                height={18}
                src="/icons/Clock Icon.png"
                alt=""
              />
              </div>
              <span className="text-body-medium text-dark-secondary font-body">
                12 Menit
              </span>
            </div>
          </div>
        </div>
        <div className="flex p-5 justify-between items-center border bg-white rounded-[10px]">
          <p className="text-body-small md:text-body-medium text-dark-primary font-body font-medium leading-[19.6px]">
            Jobs in the field of user experience
          </p>
          <div className="hidden md:flex gap-4 h-6">
            <div className="flex gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <Image
                  src="/icons/Play Button Icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
              <span className="text-body-medium text-dark-secondary font-body">
                Video
              </span>
            </div>
            <div className="flex gap-2">
            <div className="w-6 h-6 flex justify-center items-center">
              <Image
                width={18}
                height={18}
                src="/icons/Clock Icon.png"
                alt=""
              />
              </div>
              <span className="text-body-medium text-dark-secondary font-body">
                12 Menit
              </span>
            </div>
          </div>
        </div>
        <div className="flex p-5 justify-between items-center border bg-white rounded-[10px]">
          <p className="text-body-small md:text-body-medium text-dark-primary font-body font-medium leading-[19.6px]">
            The product development life cycle
          </p>
          <div className="hidden md:flex gap-4 h-6">
            <div className="flex gap-2">
              <div className="w-6 h-6 flex items-center justify-center">
                <Image
                  src="/icons/Play Button Icon.png"
                  alt=""
                  width={18}
                  height={18}
                />
              </div>
              <span className="text-body-medium text-dark-secondary font-body">
                Video
              </span>
            </div>
            <div className="flex gap-2">
              <div className="w-6 h-6 flex justify-center items-center">
              <Image
                width={18}
                height={18}
                src="/icons/Clock Icon.png"
                alt=""
              />
              </div>
              <span className="text-body-medium text-dark-secondary font-body">
                12 Menit
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center w-full p-0">
          <h6 className="text-h6 text-primary font-heading font-semibold line-clamp-1">
            Universal design, inclusive design, and equity-focused design
          </h6>
          <Button
            className="w-6 h-6 flex justify-center items-center"
            src="/icons/Arrow Down Icon.png"
            width={14}
            height={7}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center w-full p-0">
          <h6 className="text-h6 text-primary font-heading font-semibold line-clamp-1">
            Introduction to design sprints
          </h6>
          <Button
            className="w-6 h-6 flex justify-center items-center"
            src="/icons/Arrow Down Icon.png"
            width={14}
            height={7}
          />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-center w-full p-0">
          <h6 className="text-h6 text-primary font-heading font-semibold">
            Introduction to UX research
          </h6>
          <Button
            className="w-6 h-6 flex justify-center items-center"
            src="/icons/Arrow Down Icon.png"
            width={14}
            height={7}
          />
        </div>
      </div>
    </div>
  );
};

const RatingAndReview = () => {
  return (
    <article className="bg-white flex flex-col p-6 gap-6 border rounded-[10px]">
      <h5 className="text-h5 text-dark-primary font-semibold font-heading">
        Rating dan Review
      </h5>
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex flex-col gap-4 p-5 border rounded-[10px]">
          <div className="flex gap-2.5">
          <div className="w-10 h-10">
            <Image src="/avatars/Avatar-08.png" alt="" width={40} height={40}/>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-dark-primary text-body-small md:text-body-medium font-body font-medium">
                Gregorius Edrik Lawanto
              </span>
              <p className="text-body-small text-dark-secondary font-body">
                Almuni Batch 2
              </p>
            </div>
          </div>
          <div>
            <p className="text-body-medium text-dark-primary font-body">
              Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja
              sebagai Senior Talent Acquisition Specialist di Wings Group
              Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4 p-5 border rounded-[10px]">
          <div className="flex gap-2.5">
            <div className="w-10 h-10">
            <Image src="/avatars/Avatar-08.png" alt="" width={40} height={40}/>
            </div>
            <div className="flex flex-col justify-center">
              <span className="text-dark-primary text-body-small md:text-body-medium font-body font-medium">
                Gregorius Edrik Lawanto
              </span>
              <p className="text-body-small text-dark-secondary font-body">
                Alumni Batch 2
              </p>
            </div>
          </div>
          <div>
            <p className="text-body-medium text-dark-primary font-body">
              Berkarier di bidang HR selama lebih dari 3 tahun. Saat ini bekerja
              sebagai Senior Talent Acquisition Specialist di Wings Group
              Indonesia (Sayap Mas Utama) selama hampir 1 tahun.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};

export default DescProduct;
