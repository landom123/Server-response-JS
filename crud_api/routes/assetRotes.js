'use strict';

const express = require('express');
const assetController= require('../controllers/assetController');
const router = express.Router();

const {getAllasset, assetByCode, addAsset, getCode, assetByUserBranch, getAllasset2, WrongBranch, 
    updateReference, lostAssets, scan_check_result, AssetsAll_Control, SelectDTL_Control,
    store_FA_control_create_doc, store_FA_control_creat_Detail, store_FA_control_select_NAC,store_FA_control_select_dtl,
    store_FA_control_select_headers, store_FA_control_update_DTLandHeaders, store_FA_control_update_DTL, 
    store_FA_control_execDocID, store_FA_control_select_NAC_approve, store_FA_control_updateStatus,
    store_FA_control_drop_NAC,store_FA_control_comment, qureyNAC_comment, store_FA_control_GuaranteeNAC,
    store_FA_control_seals_update, store_FA_control_updateDTL_seals, stroe_FA_control_Path,qureyNAC_path,
    store_FA_control_CheckAssetCode_Process,stroe_FA_control_DTL_ConfirmSuccess, store_FA_control_upadate_table
    ,store_FA_SendMail, store_FA_control_Create_from_reported, store_FA_control_HistorysAssets,
    store_FA_control_fetch_assets, FA_Control_Report_All_Counted_by_Description} = assetController;

router.post('/ReportassetsAll', getAllasset);
router.post('/getAsset', assetByCode);
router.get('/getAsset/:body', getCode);
router.post('/addAsset', addAsset);
router.post('/getAssetbyUserBranch', assetByUserBranch);
router.post('/wrongBranch', WrongBranch);
router.post('/testGetBranch', getAllasset2);
router.post('/lostAssets', lostAssets);
router.put('/updateReference', updateReference);
router.post('/check_code_result', scan_check_result);

// AssetsAll_Control
router.post('/AssetsAll_Control', AssetsAll_Control);
router.post('/SelectDTL_Control', SelectDTL_Control);
router.post('/store_FA_control_create_doc', store_FA_control_create_doc);
router.post('/store_FA_control_creat_Detail', store_FA_control_creat_Detail);
router.post('/store_FA_control_select_NAC', store_FA_control_select_NAC);
router.post('/store_FA_control_select_dtl', store_FA_control_select_dtl);
router.post('/store_FA_control_select_headers', store_FA_control_select_headers);
router.post('/store_FA_control_update_DTLandHeaders', store_FA_control_update_DTLandHeaders);
router.post('/store_FA_control_update_DTL', store_FA_control_update_DTL);
router.post('/store_FA_control_execDocID', store_FA_control_execDocID);
router.post('/store_FA_control_select_NAC_approve', store_FA_control_select_NAC_approve);
router.post('/store_FA_control_updateStatus', store_FA_control_updateStatus);
router.post('/store_FA_control_drop_NAC', store_FA_control_drop_NAC);
router.post('/store_FA_control_comment', store_FA_control_comment);
router.post('/qureyNAC_comment', qureyNAC_comment);
router.post('/store_FA_control_GuaranteeNAC', store_FA_control_GuaranteeNAC);
router.post('/store_FA_control_seals_update', store_FA_control_seals_update);
router.post('/store_FA_control_updateDTL_seals', store_FA_control_updateDTL_seals);
router.post('/stroe_FA_control_Path', stroe_FA_control_Path);
router.post('/qureyNAC_path', qureyNAC_path);
router.post('/store_FA_control_CheckAssetCode_Process', store_FA_control_CheckAssetCode_Process);
router.post('/stroe_FA_control_DTL_ConfirmSuccess', stroe_FA_control_DTL_ConfirmSuccess);
router.post('/store_FA_control_upadate_table', store_FA_control_upadate_table);
router.post('/store_FA_SendMail', store_FA_SendMail);
router.post('/store_FA_control_Create_from_reported', store_FA_control_Create_from_reported);
router.post('/store_FA_control_HistorysAssets', store_FA_control_HistorysAssets);
router.post('/store_FA_control_fetch_assets', store_FA_control_fetch_assets);
router.post('/FA_Control_Report_All_Counted_by_Description', FA_Control_Report_All_Counted_by_Description);


module.exports = {
    routes : router
}