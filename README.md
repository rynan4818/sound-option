# sound-option

[Beat Saber Overlay 改良版](https://github.com/rynan4818/beat-saber-overlay)でイベント合わせて音声ファイルを鳴らす追加スクリプトです。

### 以下のイベントで指定した音声ファイルを鳴らせます
- 指定のコンボ数に達したとき
- フルコンボで終了したとき
- クリアして終了したとき
- フェイルして終了したとき
- ミスしたとき
- ボムをカットしたとき
- NFでフェイルしたとき
- ポーズしたとき
- ポーズ解除したとき
- 壁に入ったとき
- メニューのシーンに戻ったとき
- 譜面のプレイをスタートしたとき
- ノーツをカットしたとき

配信ツールには依存しませんので、OBS StudioやStreamlabs Desktopなど、どれでも使用可能です。

説明はOBS Studioで行います。

## 使用方法

 1. Beat Saber Overlay 改良版をインストールして使えるようにします
 
    配布サイト:https://github.com/rynan4818/beat-saber-overlay

    インストールと設定方法は上記サイトに詳細があります。
    
    オーバーレイ機能を使用しない場合は、OBS Studio等の配信ツール上でオーバーレイを非表示にしてください

    (例えば、他のDataPullerとかのオーバーレイを使用している場合など)
    
    非表示にしても、裏で本機能は動くのでOBS Studioのどこかのシーンのソースにオーバーレイを設定する必要があります

    **注意点として `表示されていないときにソースをシャットダウン` と `シーンがアクティブになったときにブラウザの表示を更新` の２つはチェックしないで下さい**

    ![preview](https://rynan4818.github.io/obs-control2.png)
        
 2. 本ツールの[リリースページ](https://github.com/rynan4818/sound-option/releases)から最新リリースをダウンロードします。

 3. 1.でインストールしたオーバーレイのフォルダに、本ツールのファイルをコピーしてください。

    - `js` フォルダに、`sound-option.js`を追加
    
      本ツールの`js`フォルダのファイルは、Beat Saber Overlay 改良版の[Release v2022/04/25](https://github.com/rynan4818/beat-saber-overlay/releases/tag/v2022%2F04%2F25)以降の`js`フォルダのファイルを対象にしています。それ以前の場合は最新版の`js`フォルダのファイルに差し替えて下さい。
    
    - インストールしたオーバーレイの `index.html` をメモ帳で開いて最後の方にある

          <script src="./js/options.js"></script>

      を探して、その上の行に

          <script src="https://cdnjs.cloudflare.com/ajax/libs/howler/2.2.1/howler.js"></script>
          <script src='./js/sound-option.js'></script>

      の２行を追加してください。
      
      **必ず`options.js`の行よりも前に追加して下さい。**

 4. 1.でインストールしたオーバーレイのフォルダに、`sound`フォルダを作成して、そこに鳴らしたい音声ファイルを置きます。
 
    音声フォーマットはwavやmp3やaac,oggなど大体なんでも対応しています。
 
 5. オーバーレイの `js` フォルダにコピーした `sound-option.js` をメモ帳で開きます

    以下の行の設定に、soundフォルダに置いた音声ファイルを指定します。
    
    使用しないイベントは''にして下さい。

    sound_combo[◯◯]の◯◯の数字は、コンボ数の指定です。任意の数字に変更や追加が可能です。

    # 設定例

        sound_combo[50] = './sound/combo_0050.wav';
        sound_combo[100] = './sound/combo_0100.wav';
        sound_combo[200] = './sound/combo_0200.wav';
        sound_combo[300] = './sound/combo_0300.wav';
        sound_combo[400] = './sound/combo_0400.wav';
        sound_combo[500] = './sound/combo_0500.wav';
        sound_combo[600] = './sound/combo_0600.wav';
        sound_combo[700] = './sound/combo_0700.wav';
        sound_combo[800] = './sound/combo_0800.wav';
        sound_combo[900] = './sound/combo_0900.wav';
        sound_combo[1000] = './sound/combo_1000.wav';
        sound_combo[2000] = './sound/combo_2000.wav';
        const sound_full_combo  = './sound/fullcombo.wav';
        const sound_finished    = '';
        const sound_failed      = '';
        const sound_noteMissed  = '';
        const sound_bombCut     = '';
        const sound_softFailed  = '';
        const sound_pause       = '';
        const sound_resume      = '';
        const sound_obstacle    = './sound/laser6.wav';
        const sound_menu        = '';
        const sound_songStart   = '';
        const sound_noteCut     = '';
