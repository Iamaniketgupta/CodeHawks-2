import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { useSelector } from "react-redux";


const RoomPage = () => {

    const user = useSelector((state) => state.auth.user);
// console.log(user);

    const { roomId } = useParams();

    console.log(roomId);

    const myMeeting = async (element) => {

        const APP_ID = 1252116654;
        const SERVER_SECRET = '82bbddcff0bcf536cf5a84e3df34ceca';
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(APP_ID, SERVER_SECRET, roomId, user._id, user.fullName);
        const zc =  ZegoUIKitPrebuilt.create(kitToken);

        zc.joinRoom({
            container: element,
            sharedLinks: [{
                name: "Copy Link",
                url: `http://localhost:5173/room/${roomId}`,
            }],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall
            },
            showScreenSharingButton: true,
        })

    }
    return (
        <div>
            <div ref={myMeeting} />
        </div>
    );
}

export default RoomPage;
