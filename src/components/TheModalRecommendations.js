import BaseModal from "./BaseModal";

function TheModalRecommendations({ onClose: handleClose }) {
  return (
    <BaseModal classes="h-80 w-[480px] bg-[#333]" onClose={handleClose}>
      <h1 className="text-3xl pt-8 pb-3 px-8 font-bold leading-relaxed border-b border-neutral-600">
        About recommanedations
      </h1>
      <div className="py-6 px-8 overflow-y-auto">
        Our recommendations will help you find audio files for your enjoyment,
        no matter if it's a favorite song from the past, a brand new hit or a
        show you had no idea would interest you so much. Our editors around the
        world have extensive knowledge of music and culture, and they make sure
        that our playlists provide a great listening experience. Our
        personalized recommendations take into account your unique taste and
        take into account a variety of factors, such as the type of content you
        listen to and when, the listening habits of people who have similar
        taste in music and podcasts, and the professionalism of our music and
        podcast experts. Commercial considerations may influence our
        recommendations in some cases, but the enjoyment of the listener is our
        first priority, and we always only recommend content that we think you
        will want to hear. Our recommendations are based on the signals we
        receive from you, so keep listening to the songs and podcasts you love!
      </div>
    </BaseModal>
  );
}

export default TheModalRecommendations;
