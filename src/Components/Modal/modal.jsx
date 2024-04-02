import './style/modal.less'
import {createPortal} from 'react-dom';

/**
 *  https://juejin.cn/post/6844903683197501447?searchId=2023122608501969ADFD49FACD01217FC2
 *  https://juejin.cn/post/6976570756071161869?from=search-suggest
 *  https://juejin.cn/post/7289667869577609235?searchId=2023122608501969ADFD49FACD01217FC2
 *  https://juejin.cn/post/7282975291001274380?searchId=2023122608501969ADFD49FACD01217FC2#heading-12
 */

function Modal() {

    return (
        <div>
            <h1>This child is placed in the parent div.</h1>
            {createPortal(
                <h1>This child is placed in the document body.</h1>,
                document.body
            )}
        </div>


    )
}

export default Modal
